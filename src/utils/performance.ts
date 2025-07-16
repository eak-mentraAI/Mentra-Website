// Performance monitoring utilities
export const initPerformanceMonitoring = () => {
  // Track Core Web Vitals
  // Note: web-vitals package would need to be installed for this to work
  // import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
  //   getCLS(console.log);
  //   getFID(console.log);
  //   getFCP(console.log);
  //   getLCP(console.log);
  //   getTTFB(console.log);
  // }).catch(() => {
  //   console.log('web-vitals not available');
  // });

  // Track page load performance
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const metrics = {
      // Navigation timing
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      ttfb: navigation.responseStart - navigation.requestStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      
      // Paint timing
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
      
      // Resource timing
      totalResources: performance.getEntriesByType('resource').length,
      totalSize: performance.getEntriesByType('resource').reduce((total, resource) => {
        return total + (resource as PerformanceResourceTiming).transferSize;
      }, 0)
    };

    console.log('Performance Metrics:', metrics);
    
    // Send to analytics if available
    // Note: Google Analytics would need to be set up for this to work
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', 'performance', {
    //     event_category: 'web_vitals',
    //     value: Math.round(metrics.firstContentfulPaint),
    //     custom_map: {
    //       dns_time: metrics.dns,
    //       tcp_time: metrics.tcp,
    //       ttfb: metrics.ttfb,
    //       dom_content_loaded: metrics.domContentLoaded,
    //       load_complete: metrics.loadComplete,
    //       total_resources: metrics.totalResources,
    //       total_size: metrics.totalSize
    //     }
    //   });
    // }
  });

  // Track route changes
  let lastRoute = window.location.pathname;
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        const newRoute = window.location.pathname;
        if (newRoute !== lastRoute) {
          console.log(`Route change: ${lastRoute} -> ${newRoute}`);
          lastRoute = newRoute;
        }
      }
    }
  });
  
  observer.observe({ entryTypes: ['navigation'] });
};

// Track component render performance
export const trackComponentRender = (componentName: string) => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
    
    if (duration > 16) { // Longer than one frame at 60fps
      console.warn(`${componentName} took ${duration.toFixed(2)}ms to render (slow)`);
    }
  };
};

// Track image load performance
export const trackImageLoad = (src: string) => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    console.log(`Image load time (${src}): ${duration.toFixed(2)}ms`);
  };
};

// Memory usage monitoring
export const trackMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    console.log('Memory Usage:', {
      usedJSHeapSize: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
      totalJSHeapSize: `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
      jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
    });
  }
};

// Network quality monitoring
export const trackNetworkQuality = () => {
  if ('connection' in navigator) {
    const connection = (navigator as Navigator & { connection: { effectiveType: string; downlink: number; rtt: number; saveData: boolean } }).connection;
    console.log('Network Quality:', {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    });
  }
}; 