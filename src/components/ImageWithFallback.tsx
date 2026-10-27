import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Lantern Serviced Apartments',
  className = '',
  containerClassName = '',
  fallbackText,
  onClick,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-[#F4ECE4] text-stone-500 flex flex-col items-center justify-center p-4 text-center select-none ${className} ${containerClassName}`}
        onClick={onClick}
      >
        <div className="w-10 h-10 rounded-xl bg-white/80 border border-[#E5DACD] flex items-center justify-center text-[#8C6D32] mb-2 shadow-xs">
          <ImageIcon className="w-5 h-5" />
        </div>
        <p className="text-xs font-serif font-bold text-[#2C221A] line-clamp-1">
          Lantern Serviced Apartments
        </p>
        <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
          {fallbackText || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      onClick={onClick}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
