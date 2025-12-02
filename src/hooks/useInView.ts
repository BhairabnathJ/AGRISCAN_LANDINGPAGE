import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
  delay?: number;
}

/**
 * Custom hook to detect when an element is in viewport
 * Uses Intersection Observer API for performance
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already triggered and triggerOnce is true, don't observe again
    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;

        if (delay > 0 && inView) {
          setTimeout(() => {
            setIsInView(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          }, delay);
        } else {
          setIsInView(inView);
          if (inView && triggerOnce) {
            setHasTriggered(true);
          }
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, triggerOnce, hasTriggered, delay]);

  return { ref, isInView };
}

/**
 * Hook to create staggered animations for multiple elements
 */
export function useStaggeredInView<T extends HTMLElement = HTMLDivElement>(
  count: number,
  options: UseInViewOptions = {}
) {
  const refs = useRef<(T | null)[]>([]);
  const [inViewStates, setInViewStates] = useState<boolean[]>(
    new Array(count).fill(false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInViewStates((prev) => {
              const newStates = [...prev];
              newStates[index] = true;
              return newStates;
            });
          }
        },
        {
          threshold: options.threshold ?? 0.1,
          root: options.root ?? null,
          rootMargin: options.rootMargin ?? '0px'
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [count, options.threshold, options.root, options.rootMargin]);

  const setRef = (index: number) => (element: T | null) => {
    refs.current[index] = element;
  };

  return { setRef, inViewStates };
}
