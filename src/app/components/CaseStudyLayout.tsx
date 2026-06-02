import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface CaseStudyLayoutProps {
  title: string;
  company: string;
  summary: string;
  onBack: () => void;
  children: ReactNode;
}

export function CaseStudyLayout({ title, company, summary, onBack, children }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 transition-colors hover:text-teal-dark"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </button>

        <div className="mb-10">
          <p className="tracking-widest mb-2 opacity-60">{company}</p>
          <h1 className="mb-5 tracking-tight">{title}</h1>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <p className="text-lg leading-relaxed opacity-80">{summary}</p>
          </div>
        </div>

        <div className="prose-custom">
          {children}
        </div>
      </div>
    </div>
  );
}
