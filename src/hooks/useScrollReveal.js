import { useEffect, useRef, useState } from 'react';

/**
 * @param {{ threshold?: number, rootMargin?: string }} [options]
 * @returns {[React.RefObject<HTMLElement>, boolean]}
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
