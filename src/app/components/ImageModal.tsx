import { X } from 'lucide-react';

interface ImageModalProps {
  image: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({ image, alt, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
        aria-label="Close modal"
      >
        <X size={32} />
      </button>
      <img 
        src={image} 
        alt={alt}
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
