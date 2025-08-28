// Performance monitoring and optimization utilities

export interface PerformanceMetrics {
  loadTime?: number;
  domContentLoaded?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {};

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.monitorCoreWebVitals();
    
    // Monitor page load performance
    this.monitorPageLoad();
    
    // Monitor resource loading
    this.monitorResources();
  }

  private monitorCoreWebVitals(): void {
    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[entries.length - 1];
      if (fcp) {
        this.metrics = { ...this.metrics, firstContentfulPaint: fcp.startTime };
        console.log('FCP:', fcp.startTime);
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      if (lcp) {
        this.metrics = { ...this.metrics, largestContentfulPaint: lcp.startTime };
        console.log('LCP:', lcp.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    new PerformanceObserver((list) => {
      let cls = 0;
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          cls += layoutShiftEntry.value;
        }
      }
      this.metrics = { ...this.metrics, cumulativeLayoutShift: cls };
      console.log('CLS:', cls);
    }).observe({ entryTypes: ['layout-shift'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const firstInputEntry = entry as any;
        const fid = firstInputEntry.processingStart - firstInputEntry.startTime;
        this.metrics = { ...this.metrics, firstInputDelay: fid };
        console.log('FID:', fid);
      }
    }).observe({ entryTypes: ['first-input'] });
  }

  private monitorPageLoad(): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          this.metrics = {
            ...this.metrics,
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          };
          console.log('Page Load Performance:', this.metrics);
        }
      }, 0);
    });
  }

  private monitorResources(): void {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) {
            console.warn('Slow resource:', resource.name, resource.duration);
          }
        }
      }
    }).observe({ entryTypes: ['resource'] });
  }

  getMetrics(): PerformanceMetrics {
    return this.metrics;
  }
}

// Image optimization utilities
export const optimizeImage = (src: string, width: number, quality: number = 85): string => {
  // Add image optimization parameters
  const url = new URL(src, window.location.origin);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('f', 'webp');
  return url.toString();
};

// Lazy loading utility
export const lazyLoad = (callback: () => void, options: IntersectionObserverInit = {}): void => {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });

  // Observe the current element
  const element = document.querySelector('[data-lazy]');
  if (element) {
    observer.observe(element);
  }
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Memory usage monitoring
export const monitorMemory = (): void => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    console.log('Memory Usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
    });
  }
};

// Initialize performance monitoring
export const initPerformanceMonitoring = (): void => {
  const monitor = PerformanceMonitor.getInstance();
  monitor.startMonitoring();
  
  // Monitor memory usage periodically
  setInterval(monitorMemory, 30000);
}; 