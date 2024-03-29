import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options: IntersectionObserverInit): {
  intersected: boolean;
  ref: React.MutableRefObject<null>;
} {
  const ref = useRef(null);
  const [intersected, setIntersected] = useState(false);
  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          setIntersected(entry.isIntersecting);
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      { root, rootMargin, threshold },
    );

    if (ref.current) observer.observe(ref.current);

    const cur = ref.current;

    return () => {
      if (cur) observer.unobserve(cur);
    };
  }, [ref, root, rootMargin, threshold]);

  return { intersected, ref };
}

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };
    window.addEventListener(`scroll`, handleScroll);
    return () => window.removeEventListener(`scroll`, handleScroll);
  }, [scrollY]);

  return scrollY;
}
