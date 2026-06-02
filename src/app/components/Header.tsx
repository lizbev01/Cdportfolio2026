import { Menu } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate?: () => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (onNavigate) {
      onNavigate();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-medium tracking-tight hover:opacity-60 transition-opacity"
          >
            <span>LIZ</span> <span style={{ color: 'var(--teal-dark)' }}>BEVAN</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="transition-colors hover:text-teal-dark">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="transition-colors hover:text-teal-dark">
              Skills
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="transition-colors hover:text-teal-dark">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="transition-colors hover:text-teal-dark">
              Contact
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-neutral-200 pt-4">
            <button onClick={() => scrollToSection('about')} className="text-left transition-colors hover:text-teal-dark">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-left transition-colors hover:text-teal-dark">
              Skills
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left transition-colors hover:text-teal-dark">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left transition-colors hover:text-teal-dark">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
