import { useMemo, useState, type DragEvent } from 'react';
import { developerExperienceSlides } from './AppCreationCaseStudy';

type Slide = {
  image: string;
  caption: string;
};

function moveSlide(slides: Slide[], fromIndex: number, toIndex: number) {
  const nextSlides = [...slides];
  const [movedSlide] = nextSlides.splice(fromIndex, 1);
  nextSlides.splice(toIndex, 0, movedSlide);
  return nextSlides;
}

export function OwnerSlideReorder() {
  const [slides, setSlides] = useState<Slide[]>(developerExperienceSlides);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const orderText = useMemo(() => (
    slides.map((slide, index) => `${index + 1}. ${slide.caption}\n${slide.image}`).join('\n\n')
  ), [slides]);

  const jsonText = useMemo(() => JSON.stringify(slides, null, 2), [slides]);

  const tsText = useMemo(() => `const reorderedDeveloperExperienceSlides = ${jsonText};`, [jsonText]);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (targetIndex: number) => {
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      return;
    }

    setSlides((currentSlides) => moveSlide(currentSlides, draggedIndex, targetIndex));
    setDraggedIndex(null);
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleReset = () => {
    setSlides(developerExperienceSlides);
    setDraggedIndex(null);
  };

  const handleExit = () => {
    window.location.href = window.location.origin + window.location.pathname;
  };

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-sm bg-white p-6 shadow-sm">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Owner-only editing aid</p>
          <h1 className="mb-3">Developer experience slideshow order</h1>
          <p className="max-w-3xl leading-relaxed opacity-80">
            This view is intentionally hidden from the public portfolio and only loads in the development preview with the
            private owner URL. Drag slides into the order you want, then copy the numbered order or TypeScript array and
            send it back so the source slideshow can be updated.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleCopy(orderText)}
              className="rounded-sm bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              Copy numbered order
            </button>
            <button
              type="button"
              onClick={() => handleCopy(tsText)}
              className="rounded-sm border border-neutral-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
            >
              Copy TypeScript array
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-sm border border-neutral-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
            >
              Reset current order
            </button>
            <button
              type="button"
              onClick={handleExit}
              className="rounded-sm border border-neutral-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
            >
              Exit owner view
            </button>
            {copied && <span className="self-center text-sm font-medium text-emerald-700">Copied.</span>}
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {slides.map((slide, index) => (
            <div
              key={`${slide.image}-${slide.caption}`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              onDragEnd={() => setDraggedIndex(null)}
              className={`cursor-grab rounded-sm border bg-white p-4 shadow-sm transition active:cursor-grabbing ${
                draggedIndex === index ? 'border-neutral-900 opacity-50' : 'border-neutral-200 hover:border-neutral-400'
              }`}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-sm font-medium text-white">
                  Slide {index + 1}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-neutral-500">Drag to reorder</span>
              </div>
              <div className="mb-4 aspect-video rounded-sm border border-neutral-200 bg-neutral-100 p-2">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
              <p className="text-sm leading-relaxed opacity-80">{slide.caption}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-sm bg-white p-6 shadow-sm">
          <h2 className="mb-3">Current order output</h2>
          <p className="mb-4 max-w-3xl leading-relaxed opacity-80">
            This text updates as you drag. Copy it after you finish arranging the slides.
          </p>
          <textarea
            readOnly
            value={orderText}
            className="h-96 w-full rounded-sm border border-neutral-300 bg-neutral-50 p-4 font-mono text-sm leading-relaxed"
          />
        </section>
      </div>
    </main>
  );
}
