import { CaseStudyLayout } from './CaseStudyLayout';
import { Slideshow } from './Slideshow';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { ImageModal } from './ImageModal';
import slide1 from '../../imports/Screenshot_2026-05-31_at_7.45.07_pm.png';
import slide2 from '../../imports/Screenshot_2026-05-31_at_7.45.21_pm.png';
import slide3 from '../../imports/Screenshot_2026-05-31_at_7.45.50_pm.png';
import slide4 from '../../imports/Screenshot_2026-05-31_at_7.46.04_pm.png';
import slide5 from '../../imports/Screenshot_2026-05-31_at_7.46.27_pm.png';
import slide6 from '../../imports/Screenshot_2026-05-31_at_7.46.36_pm.png';
import slide7 from '../../imports/Screenshot_2026-05-31_at_7.46.51_pm.png';
import slide8 from '../../imports/Screenshot_2026-05-31_at_7.47.03_pm.png';
import slide9 from '../../imports/Screenshot_2026-05-31_at_7.47.21_pm.png';

interface MakingClaimsEasierCaseStudyProps {
  onBack: () => void;
}

const disabilityClaimsSlides = [
  {
    image: slide1,
    caption: 'mySunLife mobile app home screen'
  },
  {
    image: slide2,
    caption: 'Member selects their health plan'
  },
  {
    image: slide3,
    caption: 'Claims dashboard showing available claim types'
  },
  {
    image: slide4,
    caption: 'Starting a new disability claim with clear progress indicator'
  },
  {
    image: slide5,
    caption: 'Simplified claim details form with plain language questions'
  },
  {
    image: slide6,
    caption: 'Document upload with contextual guidance'
  },
  {
    image: slide7,
    caption: 'Review submission with all information clearly displayed'
  },
  {
    image: slide8,
    caption: 'Empathetic confirmation message wishing member a healthy recovery'
  },
  {
    image: slide9,
    caption: 'Claim submitted successfully with next steps'
  }
];

export function MakingClaimsEasierCaseStudy({ onBack }: MakingClaimsEasierCaseStudyProps) {
  const [selectedImage, setSelectedImage] = useState<{ image: string; alt: string } | null>(null);

  return (
    <>
    <CaseStudyLayout
      title="Making insurance claims easier"
      company="Sun Life Financial"
      summary="Overhauled health, dental, and disability claims with streamlined, plain-language, step-by-step processes and modern forms, achieving 42% fewer drop-offs, sub-20-minute submissions, and 35% fewer support calls."
      onBack={onBack}
    >
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1">
          <section className="mb-12">
            <h2 className="mb-6">The challenge</h2>
            <p className="leading-relaxed opacity-80">
              Members dealing with illness or injury faced complex multi-page websites filled with medical jargon and unclear next steps. This led to high abandonment rates, user stress, excessive service calls, and processing delays.
            </p>
            <p className="leading-relaxed opacity-80 mt-4">
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

          <section>
            <h3 className="mb-3">Impact</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
                <div className="mb-2">
                  <span className="opacity-60">Form drop-off rates</span>
                </div>
                <p className="leading-relaxed">
                  42% reduction
                </p>
              </div>
              <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
                <div className="mb-2">
                  <span className="opacity-60">Average submission time</span>
                </div>
                <p className="leading-relaxed">
                  Decreased from over 60 minutes to under 20 minutes
                </p>
              </div>
              <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
                <div className="mb-2">
                  <span className="opacity-60">Form-related support inquiries</span>
                </div>
                <p className="leading-relaxed">
                  35% decrease
                </p>
              </div>
              <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
                <div className="mb-2">
                  <span className="opacity-60">Member satisfaction</span>
                </div>
                <p className="leading-relaxed">
                  80% of surveyed members gave 4+ star ratings
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="md:w-96 flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setSelectedImage({
                  image: 'https://static.wixstatic.com/media/4c0acd_d2d230d7de17447e919666bb4610d36a~mv2.jpg/v1/fill/w_1048,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-11-07_14-15-30.jpg',
                  alt: 'Non-fillable PDF forms in desktop site'
                })}
                className="w-full cursor-zoom-in"
              >
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/4c0acd_d2d230d7de17447e919666bb4610d36a~mv2.jpg/v1/fill/w_1048,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-11-07_14-15-30.jpg"
                  alt="Non-fillable PDF forms in desktop site"
                  className="w-full h-auto"
                />
              </button>
              <div className="px-4 py-3 bg-white">
                <p className="text-sm opacity-70 leading-relaxed">Non-fillable PDF forms buried in the desktop site with no mobile experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="mb-6">After - short-term disability claims</h2>

        <p className="leading-relaxed opacity-80 mb-6">
          Members struggled with cumbersome multi-page desktop processes for attaching paperwork and diagnosis details. A previous 15-page PDF was overly complicated, and the corporate tone felt unsupportive during what were already difficult times.
        </p>

        <ul className="space-y-3 opacity-80 mb-6">
          <li className="leading-relaxed">
            Mapped complete user journeys from diagnosis to decision to understand where people were getting stuck
          </li>
          <li className="leading-relaxed">
            Identified 5 core required steps that covered 85% of submissions, eliminating unnecessary complexity
          </li>
          <li className="leading-relaxed">
            Applied the empathy framework we developed to eliminate corporate phrasing and support people through difficult moments
          </li>
          <li className="leading-relaxed">
            Embedded required forms directly into the transactional flow instead of making people hunt for PDFs
          </li>
        </ul>

        <Slideshow slides={disabilityClaimsSlides} />
      </section>
    </CaseStudyLayout>

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
