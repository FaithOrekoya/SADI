import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#102B46] via-[#173A5E] to-[#252D35] p-6 text-center text-white ${className}`}
      >
        <ShieldCheck className="mb-3 h-10 w-10 text-[#F28C28]" aria-hidden="true" />
        <p className="font-display text-sm font-semibold tracking-tight text-white/90">
          {fallbackTitle || 'SADI Driver Training & Compliance Institute'}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
