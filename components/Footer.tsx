"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | string>("2026");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-slate-500 text-sm">
      <p>© {year} Rafi Khalbi.</p>
    </footer>
  );
}
