import { useState, useEffect, useRef } from 'react';

interface UseCountupOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  onComplete?: () => void;
  autoStart?: boolean;
}

interface UseCountupReturn {
  count: number;
  isCounting: boolean;
  start: () => void;
  reset: () => void;
  pause: () => void;
  resume: () => void;
}

export const useCountup = ({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  easing = 'easeOut',
  onComplete,
  autoStart = false
}: UseCountupOptions): UseCountupReturn => {
  const [count, setCount] = useState(start);
  const [isCounting, setIsCounting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const pauseTimeRef = useRef<number>();

  // Easing functions
  const easingFunctions = {
    linear: (t: number) => t,
    easeIn: (t: number) => t * t,
    easeOut: (t: number) => 1 - Math.pow(1 - t, 2),
    easeInOut: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    if (isPaused) {
      pauseTimeRef.current = timestamp;
      return;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFunctions[easing](progress);

    const currentCount = Math.floor(start + (end - start) * easedProgress);
    setCount(currentCount);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsCounting(false);
      onComplete?.();
    }
  };

  const startAnimation = () => {
    if (isCounting) return;
    
    setIsCounting(true);
    setIsPaused(false);
    startTimeRef.current = undefined;
    pauseTimeRef.current = undefined;
    
    setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, delay);
  };

  const reset = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setCount(start);
    setIsCounting(false);
    setIsPaused(false);
    startTimeRef.current = undefined;
    pauseTimeRef.current = undefined;
  };

  const pause = () => {
    if (isCounting && !isPaused) {
      setIsPaused(true);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  };

  const resume = () => {
    if (isCounting && isPaused) {
      setIsPaused(false);
      if (pauseTimeRef.current && startTimeRef.current) {
        const pausedDuration = pauseTimeRef.current - startTimeRef.current;
        startTimeRef.current = performance.now() - pausedDuration;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  // Auto-start if enabled
  useEffect(() => {
    if (autoStart) {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoStart]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return {
    count,
    isCounting,
    start: startAnimation,
    reset,
    pause,
    resume,
  };
};

// Specialized hook for percentage values
export const usePercentageCountup = (end: number, options?: Omit<UseCountupOptions, 'end'>) => {
  return useCountup({
    start: 0,
    end,
    duration: 2000,
    ...options,
  });
};

// Specialized hook for large numbers with K/M suffixes
export const useLargeNumberCountup = (end: number, options?: Omit<UseCountupOptions, 'end'>) => {
  const { count, ...rest } = useCountup({
    start: 0,
    end,
    duration: 2500,
    ...options,
  });

  const formatLargeNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return {
    count,
    formattedCount: formatLargeNumber(count),
    ...rest,
  };
};

// Hook for intersection observer to trigger countup when visible
export const useCountupOnVisible = (
  options: UseCountupOptions,
  threshold: number = 0.5
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  const countup = useCountup({
    ...options,
    autoStart: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          countup.start();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible, countup]);

  return {
    elementRef,
    ...countup,
  };
}; 