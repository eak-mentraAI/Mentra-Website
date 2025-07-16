import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '100vw'
}) => {
  // Only use WebP/AVIF optimization in production
  const isProduction = import.meta.env.PROD;
  
  if (!isProduction) {
    // Development: simple img tag to avoid complexity
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        style={{ opacity: 1, transition: 'opacity 0.3s ease-in' }}
        onLoad={(e) => {
          // Add fade-in effect
          const target = e.target as HTMLImageElement;
          target.style.opacity = '0';
          target.style.transition = 'opacity 0.3s ease-in';
          setTimeout(() => {
            target.style.opacity = '1';
          }, 50);
        }}
      />
    );
  }

  // Production: use WebP/AVIF optimization
  const isImageOptimizable = /\.(jpg|jpeg|png)$/i.test(src);
  const baseName = src.replace(/\.(jpg|jpeg|png)$/i, '');
  
  if (isImageOptimizable) {
    return (
      <picture>
        {/* AVIF format - best compression */}
        <source
          srcSet={`${baseName}.avif`}
          type="image/avif"
        />
        
        {/* WebP format - good compression, wide support */}
        <source
          srcSet={`${baseName}.webp`}
          type="image/webp"
        />
        
        {/* Original format as fallback */}
        <img
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          style={{ opacity: 1, transition: 'opacity 0.3s ease-in' }}
          onLoad={(e) => {
            // Add fade-in effect
            const target = e.target as HTMLImageElement;
            target.style.opacity = '0';
            target.style.transition = 'opacity 0.3s ease-in';
            setTimeout(() => {
              target.style.opacity = '1';
            }, 50);
          }}
        />
      </picture>
    );
  }

  // Non-optimizable images (already WebP/AVIF)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      style={{ opacity: 1, transition: 'opacity 0.3s ease-in' }}
      onLoad={(e) => {
        // Add fade-in effect
        const target = e.target as HTMLImageElement;
        target.style.opacity = '0';
        target.style.transition = 'opacity 0.3s ease-in';
        setTimeout(() => {
          target.style.opacity = '1';
        }, 50);
      }}
    />
  );
};

export default OptimizedImage; 