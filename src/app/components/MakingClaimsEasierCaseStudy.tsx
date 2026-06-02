import { CaseStudyLayout } from './CaseStudyLayout';
import { Slideshow } from './Slideshow';

interface MakingClaimsEasierCaseStudyProps {
  onBack: () => void;
}

const disabilityClaimsSlides = [
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    caption: 'mySunLife mobile app home screen'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
    caption: 'Member selects their health plan'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    caption: 'Claims dashboard showing available claim types'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
    caption: 'Starting a new disability claim with clear progress indicator'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    caption: 'Simplified claim details form with plain language questions'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
    caption: 'Document upload with contextual guidance'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    caption: 'Review submission with all information clearly displayed'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
    caption: 'Empathetic confirmation message wishing member a healthy recovery'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    caption: 'Claim submitted successfully with next steps'
  }
];

export function MakingClaimsEasierCaseStudy({ onBack }: MakingClaimsEasierCaseStudyProps) {
  return (
    <CaseStudyLayout
      title="Making insurance claims easier"
      company="Sun Life Financial"
      summary="Overhauled health, dental, and disability claims with streamlined, plain-language, step-by-step processes and modern forms, achieving 42% fewer drop-offs, sub-20-minute submissions, and 35% fewer support calls."
      onBack={onBack}
    >
      <section className="mb-12">
        <h2 className="mb-6">The challenge</h2>
        <p className="leading-relaxed opacity-80 mb-4">
          Members dealing with illness or injury faced complex multi-page websites filled with medical jargon and unclear next steps. This led to high abandonment rates, user stress, excessive service calls, and processing delays.
        </p>
        <p className="leading-relaxed opacity-80">
          Before this project, members only had access to non-fillable PDFs buried deep in the desktop site. There was no mobile experience at all.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6">The approach</h2>
        <ul className="space-y-3 opacity-80 mb-6">
          <li className="leading-relaxed">
            Reorganized multi-page processes into logical, progressive steps across disability, dental, prescriptions, and vision claims
          </li>
          <li className="leading-relaxed">
            Simplified dense legal and medical language with contextual tooltips to clarify confusing questions
          </li>
          <li className="leading-relaxed">
            Added progress indicators with checkmarks showing completion status at each step
          </li>
          <li className="leading-relaxed">
            Introduced conditional logic so dynamic fields adapt to hide irrelevant sections
          </li>
          <li className="leading-relaxed">
            Embedded documentation support at high-friction points throughout the flow
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Disability claims flow</h2>
        <Slideshow slides={disabilityClaimsSlides} />
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <div className="mb-2">
              <span className="opacity-60">Form completion</span>
            </div>
            <p className="leading-relaxed font-medium">
              42% fewer drop-offs
            </p>
          </div>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <div className="mb-2">
              <span className="opacity-60">Time to complete</span>
            </div>
            <p className="leading-relaxed font-medium">
              Under 20 minutes
            </p>
          </div>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <div className="mb-2">
              <span className="opacity-60">Support calls</span>
            </div>
            <p className="leading-relaxed font-medium">
              35% reduction
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
