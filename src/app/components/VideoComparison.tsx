import { useEffect, useRef, useState } from 'react';
import { ImageModal } from './ImageModal';

interface VideoComparisonProps {
  beforeVideo: string;
  afterVideo: string;
  beforeSpeed?: number;
}

export function VideoComparison({ beforeVideo, afterVideo, beforeSpeed = 1.25 }: VideoComparisonProps) {
  const beforeRef = useRef<HTMLVideoElement>(null);
  const afterRef = useRef<HTMLVideoElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ video: string; title: string } | null>(null);

  useEffect(() => {
    if (beforeRef.current) {
      beforeRef.current.playbackRate = beforeSpeed;
    }
  }, [beforeSpeed]);

  const handleBeforeEnded = () => {
    if (afterRef.current) {
      afterRef.current.play();
    }
  };

  const handleAfterEnded = () => {
    if (beforeRef.current) {
      beforeRef.current.currentTime = 0;
      beforeRef.current.play();
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white border border-neutral-200 overflow-hidden">
          <button
            onClick={() => setSelectedVideo({ video: beforeVideo, title: 'Before' })}
            className="w-full cursor-zoom-in"
          >
            <div className="bg-neutral-100 relative" style={{ aspectRatio: '4/3' }}>
              <video
                ref={beforeRef}
                src={beforeVideo}
                className="w-full h-full object-contain pointer-events-none"
                autoPlay
                muted
                playsInline
                onEnded={handleBeforeEnded}
              />
              <div className="absolute top-4 left-4 bg-neutral-900 text-white px-3 py-1 rounded-full">
                <span className="font-medium">Playing at {beforeSpeed}x</span>
              </div>
            </div>
          </button>
          <div className="p-6">
            <h4 className="mb-3 tracking-tight">Before</h4>
            <p className="text-sm opacity-70 leading-relaxed">
              Unorganized permissions and features list with technical jargon
            </p>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 overflow-hidden">
          <button
            onClick={() => setSelectedVideo({ video: afterVideo, title: 'After' })}
            className="w-full cursor-zoom-in"
          >
            <div className="bg-neutral-100" style={{ aspectRatio: '4/3' }}>
              <video
                ref={afterRef}
                src={afterVideo}
                className="w-full h-full object-contain pointer-events-none"
                muted
                playsInline
                onEnded={handleAfterEnded}
              />
            </div>
          </button>
          <div className="p-6">
            <h4 className="mb-3 tracking-tight">After</h4>
            <p className="text-sm opacity-70 leading-relaxed">
              100+ permissions and 45 products organized into 19 use cases
            </p>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-neutral-100 transition-colors z-10"
            aria-label="Close"
          >
            ✕
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo.video}
              className="w-full h-full object-contain"
              autoPlay
              controls
              playsInline
            />
            <p className="text-white text-center mt-4 font-medium">{selectedVideo.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
