import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

const Reveal = ({ children, className = "", delay = 0, style }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default Reveal;
