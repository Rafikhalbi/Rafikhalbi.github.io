"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface MusicPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The source URL of the audio file or YouTube video */
  src: string;
  /** The URL of the album cover image */
  coverArt: string;
  /** Whether to auto-play the audio when loaded */
  autoPlay?: boolean;
}

export function MusicPlayer({
  className,
  src,
  coverArt,
  autoPlay = false,
  ...props
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const getYoutubeId = (url: string) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/,
    );
    return match ? match[1] : null;
  };

  const youtubeId = src ? getYoutubeId(src) : null;

  useEffect(() => {
    if (isPlaying) {
      if (youtubeId && iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*",
        );
      } else {
        audioRef.current?.play().catch(() => setIsPlaying(false));
      }
    } else {
      if (youtubeId && iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
          "*",
        );
      } else {
        audioRef.current?.pause();
      }
    }
  }, [isPlaying, youtubeId]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={cn("relative inline-flex flex-col items-center", className)}
      {...props}>
      {youtubeId ? (
        <iframe
          ref={iframeRef}
          className="hidden"
          src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=${
            autoPlay ? 1 : 0
          }&controls=0`}
          allow="autoplay"
        />
      ) : (
        <audio
          ref={audioRef}
          src={src}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
      )}

      <div
        className="relative cursor-pointer select-none h-64 w-64 md:h-80 md:w-80"
        onClick={togglePlay}
        title={isPlaying ? "Pause" : "Play"}>
        <motion.div
          className="absolute z-20 top-[-5%] right-[-10%] sm:top-[-8%] sm:right-[-15%] origin-top-right w-[60%] h-[15%] pointer-events-none"
          initial={{ rotate: 10 }}
          animate={{ rotate: isPlaying ? -20 : 10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}>
          <div className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-400 dark:bg-zinc-600 shadow-md transform translate-x-1/2 -translate-y-1/2 border-4 border-zinc-200 dark:border-zinc-800 z-10" />
          <div className="absolute top-0 right-[10px] sm:right-[15px] w-[90%] h-2 md:h-3 bg-zinc-400 dark:bg-zinc-500 rounded-full origin-right -rotate-12 shadow-sm flex items-center justify-start">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-zinc-800 dark:bg-zinc-300 rounded-full shadow-md transform -translate-x-1/2" />
          </div>
        </motion.div>

        <div
          className={cn(
            "relative w-full h-full rounded-full border-4 sm:border-8 border-black/10 dark:border-white/10 shadow-xl overflow-hidden shadow-black/30 bg-black animate-spin",
          )}
          style={{
            animationDuration: "4s",
            animationPlayState: isPlaying ? "running" : "paused",
          }}>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity"
            style={{ backgroundImage: `url(${coverArt})` }}
          />

          <div
            className="absolute inset-0 rounded-full border border-black/20"
            style={{
              background:
                "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 21%, transparent 22%, transparent 35%, rgba(0,0,0,0.5) 36%, transparent 37%, transparent 50%, rgba(0,0,0,0.3) 51%, transparent 52%, transparent 65%, rgba(0,0,0,0.6) 66%, transparent 67%, transparent 80%, rgba(0,0,0,0.4) 81%, transparent 82%)",
            }}
          />

          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.2) 100%)",
            }}
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-zinc-900 border border-zinc-700 shadow-inner flex items-center justify-center">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-zinc-300 dark:bg-zinc-600 rounded-full shadow-inner border border-black/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
