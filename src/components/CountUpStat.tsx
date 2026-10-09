"use client";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * Animates the number in a value like "25+" or "200+" from 0 when scrolled
 * into view. Values without a leading number (e.g. "Zero") render as-is.
 */
export default function CountUpStat({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView(0.3);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    const duration = 1600;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out so the numbers slow down as they land
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-3xl md:text-4xl text-accent font-semibold tabular-nums">
        {match ? `${count}${suffix}` : value}
      </p>
      <p className="text-white/50 text-[10px] tracking-widest uppercase mt-1">{label}</p>
    </div>
  );
}
