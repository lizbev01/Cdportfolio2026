import Slider from 'react-slick';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ImageModal } from './ImageModal';

interface Slide {
  image: string;
  caption: string;
}

interface SlideshowProps {
  slides: Slide[];
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
      aria-label="Next slide"
    >
      <ChevronRight size={24} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} />
    </button>
  );
}

export function Slideshow({ slides }: SlideshowProps) {
  const [selectedImage, setSelectedImage] = useState<{ image: string; alt: string } | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div>
        <ul className="flex items-center justify-center gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: function(i: number) {
      return (
        <button className="w-3 h-3 rounded-full bg-neutral-300 hover:bg-neutral-600 transition-colors">
          <span className="sr-only">Slide {i + 1}</span>
        </button>
      );
    }
  };

  return (
    <>
      <div className="slideshow-container bg-neutral-100 rounded-sm overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="outline-none">
              <div className="aspect-video bg-white relative">
                <div className="absolute top-4 left-4 bg-neutral-900 text-white px-3 py-1 rounded-full z-10">
                  <span className="font-medium">{index + 1}/{slides.length}</span>
                </div>
                <button
                  onClick={() => setSelectedImage({ image: slide.image, alt: slide.caption })}
                  className="w-full h-full cursor-zoom-in"
                >
                  <ImageWithFallback
                    src={slide.image}
                    alt={slide.caption}
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
              <div className="px-6 py-4 bg-white">
                <p className="text-sm opacity-70 leading-relaxed">{slide.caption}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
