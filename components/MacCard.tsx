"use client";

import { motion } from "framer-motion";

interface MacCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function MacCard({
  children,
  title,
  className = "",
}: MacCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden shadow-sm transition-all ${className}`}>
      {title && (
        <div className="bg-slate-900/80 border-b border-slate-800 px-5 py-2.5 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400 tracking-wide">
            {title}
          </span>
        </div>
      )}
      <div className="p-6">{children}</div>
    </motion.div>
  );
}
