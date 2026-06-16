"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 9, label: "Projects Delivered", suffix: "+" },
  { value: 3, label: "Project Categories", suffix: "" },
  { value: 25, label: "Years of Excellence", suffix: "+" },
  { value: 100, label: "Happy Families", suffix: "+" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ProjectStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-8 px-6 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="font-serif text-3xl md:text-4xl font-semibold text-accent">
                <CountUp target={stat.value} suffix={stat.suffix} active={active} />
              </p>
              <p className="text-white/50 text-[10px] tracking-widest uppercase mt-1.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
