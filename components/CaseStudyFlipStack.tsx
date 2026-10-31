"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

export interface CaseStudyFlipItem {
  number?: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url?: string;
}

interface CaseStudyFlipStackProps {
  items: CaseStudyFlipItem[];
  className?: string;
}

function FlipCard({
  item,
  index,
  total,
  progress,
  reduceMotion,
}: {
  item: CaseStudyFlipItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const segment = 1 / Math.max(total, 1);
  const start = index * segment;
  const end = Math.min(start + segment, 1);
  const entryStart = Math.max(0, start - segment);
  const entryEnd =
    index === 0 ? 0.0001 : Math.min(start, entryStart + segment * 0.7);

  const exitYPercent = useTransform(
    progress,
    [start, end],
    reduceMotion ? [0, 0] : [0, -118],
  );
  const exitStackOffset = useTransform(
    progress,
    [start, end],
    reduceMotion ? [0, 0] : [0, index * 24],
  );
  const exitY = useMotionTemplate`calc(${exitYPercent}% + ${exitStackOffset}px)`;
  const rotateX = useTransform(
    progress,
    [start, end],
    reduceMotion ? [0, 0] : [0, 22],
  );
  const opacity = useTransform(
    progress,
    [start, end],
    reduceMotion ? [1, 0] : [1, 1],
  );
  const entryScale = useTransform(
    progress,
    [entryStart, entryEnd],
    index === 0 ? [1, 1] : [0.98, 1],
  );
  const entryY = useTransform(
    progress,
    [entryStart, entryEnd],
    index === 0 ? [0, 0] : [12, 0],
  );

  return (
    <motion.article
      className="absolute inset-x-0 top-0 aspect-3/4 sm:aspect-[1.76/1] will-change-transform"
      style={{
        y: exitY,
        rotateX,
        opacity,
        zIndex: total - index,
        transformOrigin: "50% 50%",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}>
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-700/50 group"
        style={{
          y: entryY,
          scale: entryScale,
          transformOrigin: "50% 100%",
        }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-950/40 backdrop-blur-[2px]" />

        <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 text-white">
          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-3xl font-mono font-bold text-emerald-400">
              {item.number ?? String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 backdrop-blur-md">
              {item.eyebrow}
            </span>
          </div>

          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
              {item.title}
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 drop-shadow">
              {item.description}
            </p>

            {item.url && (
              <div className="pt-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-lg shadow-lg transition-all duration-200">
                  <span>Visit Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function CaseStudyFlipStack({
  items,
  className,
}: CaseStudyFlipStackProps) {
  const stackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    mass: 0.5,
    restDelta: 0.0005,
  });

  const cardProgress = reduceMotion ? scrollYProgress : smoothProgress;

  return (
    <div
      ref={stackRef}
      className={cn("relative w-full", className)}
      style={{ height: `${items.length * 60}vh` }}>
      <div className="sticky top-12 sm:top-20 flex h-[80vh] flex-col justify-center overflow-hidden py-4">
        <div className="relative mx-auto aspect-3/4 w-full max-w-215 perspective-midrange sm:aspect-[1.76/1]">
          {[...items].reverse().map((item, reverseIndex) => {
            const index = items.length - reverseIndex - 1;
            return (
              <FlipCard
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                total={items.length}
                progress={cardProgress}
                reduceMotion={reduceMotion}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
