import { ImgHTMLAttributes, useState } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ImageWithFallback({ src, alt, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
        <span className="text-neutral-500">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="w-full h-full bg-neutral-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block' }}
        {...props}
      />
    </>
  );
}
