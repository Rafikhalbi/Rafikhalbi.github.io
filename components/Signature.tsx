"use client";

import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { parse as parseFont } from "opentype.js";

interface SignatureProps {
  text?: string;
  color?: string;
  fontSize?: number;
  duration?: number;
  delay?: number;
  className?: string;
  inView?: boolean;
  once?: boolean;
  fontUrl?: string;
}

export function Signature({
  text = "Signature",
  color = "currentColor",
  fontSize = 32,
  duration = 1.5,
  delay = 0,
  className = "",
  inView = false,
  once = true,
  fontUrl = "/LastoriaBoldRegular.otf",
}: SignatureProps) {
  const [paths, setPaths] = useState<string[]>([]);
  const [width, setWidth] = useState<number>(300);

  const height = fontSize * 3;
  const baseline = fontSize * 1.5;
  const maskId = `signature-reveal-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const response = await fetch(fontUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch font: ${response.statusText}`);
        }

        const buffer = await response.arrayBuffer();
        const font = parseFont(buffer);

        if (!font || !isMounted) return;

        let x = 10;
        const newPaths: string[] = [];

        for (const char of text) {
          const glyph = font.charToGlyph(char);
          const path = glyph.getPath(x, baseline, fontSize);
          newPaths.push(path.toPathData(3));

          const advanceWidth = glyph.advanceWidth ?? font.unitsPerEm;
          x += advanceWidth * (fontSize / font.unitsPerEm);
        }

        if (isMounted) {
          setPaths(newPaths);
          setWidth(Math.max(x + 20, 200));
        }
      } catch (error) {
        console.error("Error loading signature font:", error);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, [text, fontSize, baseline, fontUrl]);

  const variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  return (
    <motion.svg
      key={paths.length}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={`overflow-visible ${className}`}
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={inView ? undefined : "visible"}
      viewport={{ once }}>
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          {paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="white"
              strokeWidth={fontSize * 0.25}
              fill="none"
              variants={variants}
              transition={{
                pathLength: {
                  delay: delay + i * 0.15,
                  duration,
                  ease: "easeInOut",
                },
                opacity: {
                  delay: delay + i * 0.15 + 0.01,
                  duration: 0.01,
                },
              }}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </mask>
      </defs>

      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={color}
          strokeWidth={2}
          fill="none"
          variants={variants}
          transition={{
            pathLength: {
              delay: delay + i * 0.15,
              duration,
              ease: "easeInOut",
            },
            opacity: {
              delay: delay + i * 0.15 + 0.01,
              duration: 0.01,
            },
          }}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      <g mask={`url(#${maskId})`}>
        {paths.map((d, i) => (
          <path key={i} d={d} fill={color} />
        ))}
      </g>
    </motion.svg>
  );
}
