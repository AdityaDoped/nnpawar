"use client";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms, for staggering items in a row */
  delay?: number;
}

/** Fades and lifts its children into view the first time they scroll on screen. */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
