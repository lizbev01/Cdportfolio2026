import { X } from 'lucide-react';
import { useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageModalProps {
  image: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({ image, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-neutral-100 transition-colors z-10"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <div
        className="relative max-w-7xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <ImageWithFallback
          src={image}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
