"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Final number to count up to. */
  end: number;
  /** Text appended after the number (e.g. "+", "%"). */
  suffix?: string;
  /** Animation duration in milliseconds. */
  duration?: number;
  className?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function CountUp({
  end,
  suffix = "",
  duration = 2000,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let frame = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(easeOutCubic(progress) * end));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    // Start only once, when the stat first scrolls into view.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${end}${suffix}`}>
      <span aria-hidden="true" className="tabular-nums">
        {value}
        {suffix}
      </span>
    </span>
  );
}
