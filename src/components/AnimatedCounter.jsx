import React, { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  const numericValue = Number.parseInt(String(value).replace(/,/g, ''), 10) || 0;
  const suffix = String(value).replace(/[0-9,]/g, '');

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimatedRef.current) return undefined;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const eased = easeOutCubic(progress);
        setDisplayValue(Math.floor(numericValue * eased));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(numericValue);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [duration, numericValue]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
