import { ImageWithFallback } from './ImageWithFallback';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzgwMzQyODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Minimalist workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="tracking-widest mb-3 opacity-60 text-sm">CONTENT DESIGNER</p>
        <h1 className="mb-5 tracking-tight" style={{ fontSize: '6rem', fontWeight: 500, lineHeight: 1.1 }}>
          <span className="inline-block">LIZ</span>{' '}
          <span className="inline-block" style={{ color: 'var(--teal-dark)' }}>BEVAN</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed opacity-80">
          Systems thinking meets user-centered design. Creating clear, consistent, and accessible content experiences.
        </p>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} style={{ color: 'var(--teal-dark)' }} />
      </button>
    </section>
  );
}
