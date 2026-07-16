import { useEffect, useRef, useState } from "react";

interface IProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const StatCounter = ({ target, suffix = "+", duration = 1400 }: IProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();

        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));

          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
        observer.unobserve(node);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  useEffect(() => {
    const snapToTarget = () => setValue(target);
    window.addEventListener("beforeprint", snapToTarget);
    return () => window.removeEventListener("beforeprint", snapToTarget);
  }, [target]);

  return (
    <span ref={ref} className="stat-counter">
      {value}
      {suffix}
    </span>
  );
};

export default StatCounter;
