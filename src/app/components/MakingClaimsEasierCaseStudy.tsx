import { CaseStudyLayout } from './CaseStudyLayout';
import { Slideshow } from './Slideshow';

interface MakingClaimsEasierCaseStudyProps {
  onBack: () => void;
}

const disabilityClaimsSlides = [
  {
    image: 'https://static.wixstatic.com/media/4c0acd_c8c46f4a50364e7a88f0b4a2e8e5d5c5~mv2.png/v1/fill/w_522,h_1168,al_c,q_90/mobile.png',
    caption: 'mySunLife mobile app home screen showing available services'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_d8d46f4a50364e7a88f0b4a2e8e5d5c6~mv2.png/v1/fill/w_522,h_1168,al_c,q_90/plan.png',
    caption: 'Member selects their health plan from available options'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_e8e46f4a50364e7a88f0b4a2e8e5d5c7~mv2.png/v1/fill/w_522,h_1168,al_c,q_90/dashboard.png',
    caption: 'Claims dashboard showing available claim types'
  }
];

export function MakingClaimsEasierCaseStudy({ onBack }: MakingClaimsEasierCaseStudyProps) {
  return (
    <CaseStudyLayout
      title="Making insurance claims easier"
      company="Sun Life Financial"
      summary="Overhauled health, dental, and disability claims with streamlined, plain-language processes, achieving 42% fewer drop-offs and 35% fewer support calls."
      onBack={onBack}
    >
      <section className="mb-12">
        <h2 className="mb-6">The challenge</h2>
        <p className="leading-relaxed opacity-80">
          Members dealing with illness or injury faced complex multi-page websites filled with medical jargon and unclear next steps. Before this project, members only had access to non-fillable PDFs with no mobile experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Disability claims flow</h2>
        <Slideshow slides={disabilityClaimsSlides} />
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <p className="opacity-60 mb-2">Form completion</p>
            <p className="leading-relaxed font-medium">42% fewer drop-offs</p>
          </div>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <p className="opacity-60 mb-2">Time to complete</p>
            <p className="leading-relaxed font-medium">Under 20 minutes</p>
          </div>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <p className="opacity-60 mb-2">Support calls</p>
            <p className="leading-relaxed font-medium">35% reduction</p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
