import { CaseStudyLayout } from './CaseStudyLayout';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { ImageModal } from './ImageModal';
import beforeImage1 from '../../imports/Screenshot_2026-06-01_at_3.52.30_pm.png';

interface TaxonomyCaseStudyProps {
  onBack: () => void;
}

const beforeImages = [
  beforeImage1,
  'https://static.wixstatic.com/media/4c0acd_9e27469b38c64b4fb70685bdabcdcac1~mv2.png/v1/fill/w_1168,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c0acd_9e27469b38c64b4fb70685bdabcdcac1~mv2.png',
  'https://static.wixstatic.com/media/4c0acd_e89278c8355d44f2af111f189e11b3a6~mv2.png/v1/fill/w_240,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c0acd_e89278c8355d44f2af111f189e11b3a6~mv2.png',
  'https://static.wixstatic.com/media/4c0acd_998ab73cfaff446cab45cb295e6167f6~mv2.png/v1/fill/w_1228,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c0acd_998ab73cfaff446cab45cb295e6167f6~mv2.png'
];

const afterImage = {
  image: 'https://static.wixstatic.com/media/4c0acd_5062664a402e4bcaa4e0c8994f571471~mv2.png/v1/fill/w_840,h_36,al_c,lg_1,q_85,enc_avif,quality_auto/4c0acd_5062664a402e4bcaa4e0c8994f571471~mv2.png',
  caption: 'All common concepts were grouped in the right-hand top navigation bar, while concepts unique to each developer center were moved to a center-scoped left navigation, not seen here.'
};

export function TaxonomyCaseStudy({ onBack }: TaxonomyCaseStudyProps) {
  const [selectedImage, setSelectedImage] = useState<{ image: string; alt: string } | null>(null);

  return (
    <>
    <CaseStudyLayout
      title="Taxonomy, templates & systems"
      company="Meta & Sun Life Financial"
      summary="Rearchitected Sun Life's disability claims flow and Meta's developer platforms by translating complex compliance requirements into intuitive information architectures using scalable taxonomies, structured templates, and centralized terminology governance to streamline user journeys and reduce support volume."
      onBack={onBack}
    >
      <section className="mb-12">
        <h2 className="mb-6">Sun Life's first mobile style guide & empathy framework</h2>

        <div className="flex flex-col md:flex-row gap-8 mb-6">
          <div className="flex-1">
            <ul className="space-y-3 opacity-80">
              <li className="leading-relaxed">
                I started by talking to real customers and digging into customer care data to understand where things were breaking down. The biggest issues? Dense legal language that confused people, and a complete lack of personalization in moments that really mattered.
              </li>
              <li className="leading-relaxed">
                From there, I wrote Sun Life's first mobile style guide, built on Canadian Press standards. It gave the team a repeatable way to simplify all that heavy legal and policy terminology that overwhelmed people on small screens.
              </li>
              <li className="leading-relaxed">
                I also created an empathy framework designed around specific scenarios like receiving bad news, dealing with policy changes, or hitting claim milestones. Instead of cold, transactional language, we introduced supportive phrasing like "focus on your recovery" for disability claims. We also started putting FAQs right in the workflows instead of making people hunt for help. The framework worked so well it's still being used 6 years later.
              </li>
              <li className="leading-relaxed">
                Leading a team of three UX writers, we overhauled about 500 impersonal form letters, transforming them into humanized communications with personalized agent signatures. It brought actual human connection back into what had been purely automated processes.
              </li>
            </ul>
          </div>

          <div className="md:w-72 flex-shrink-0">
            <div className="bg-white border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setSelectedImage({
                  image: 'https://static.wixstatic.com/media/4c0acd_96417370137849e780c6d2ed611f90ff~mv2.png/v1/fill/w_522,h_1168,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c0acd_96417370137849e780c6d2ed611f90ff~mv2.png',
                  alt: 'Mobile interface showing empathy-focused claims process'
                })}
                className="w-full cursor-zoom-in"
              >
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/4c0acd_96417370137849e780c6d2ed611f90ff~mv2.png/v1/fill/w_522,h_1168,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c0acd_96417370137849e780c6d2ed611f90ff~mv2.png"
                  alt="Mobile interface showing empathy-focused claims process"
                  className="w-full h-auto"
                />
              </button>
              <div className="px-4 py-3 bg-white">
                <p className="text-sm opacity-70 leading-relaxed italic">Mobile interface showing empathy-focused claims process</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">High impact results</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
              <div className="mb-2">
                <span className="opacity-60">Form completion improvement</span>
              </div>
              <p className="leading-relaxed">
                Reduced drop-off rates by 42%
              </p>
            </div>
            <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
              <div className="mb-2">
                <span className="opacity-60">Time to complete</span>
              </div>
              <p className="leading-relaxed">
                Decreased from over an hour to under 20 minutes
              </p>
            </div>
            <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
              <div className="mb-2">
                <span className="opacity-60">Support inquiries</span>
              </div>
              <p className="leading-relaxed">
                Lowered form ambiguity inquiries by 35%
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Cross-platform term audit and IA alignment</h2>

        <div className="mb-6">
          <h3 className="mb-3">The challenge</h3>
          <p className="leading-relaxed opacity-80">
            Meta's developer centers operated in silos, each creating its own terminology and navigation patterns.
            This fragmented experience confused developers working across multiple platforms and made Meta appear
            disorganized and difficult to work with.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">The approach</h3>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              <strong>Comprehensive cross-platform audit:</strong> Systematically audited terminology and information
              architecture across all five Meta developer centers (Social Technologies, Horizon, Wearables, Llama,
              and AI), documenting how each platform described similar concepts differently
            </li>
            <li className="leading-relaxed">
              <strong>Pattern identification at scale:</strong> Discovered over 70 overlapping concepts being described
              with different terms across platforms, creating unnecessary cognitive load for developers working with
              multiple Meta products
            </li>
            <li className="leading-relaxed">
              <strong>Risk prioritization:</strong> Isolated the top 17 high-risk discrepancies where terminology
              conflicts were actively causing developer confusion, support tickets, and implementation errors
            </li>
            <li className="leading-relaxed">
              <strong>Cross-functional alignment:</strong> Partnered directly with product teams to eliminate siloed
              language and create unified standards, working to "stop shipping the org chart" to developers who
              shouldn't need to understand Meta's internal structure
            </li>
            <li className="leading-relaxed">
              <strong>Terminology standardization:</strong> Resolved contradictory UI terms by establishing single
              sources of truth (e.g., consolidated "Home," "Dashboard," and "My Apps" into unified "Home" across
              all platforms)
            </li>
            <li className="leading-relaxed">
              <strong>Feature disambiguation:</strong> Clarified conflicting feature names like "Required Actions"
              versus "Tasks" for Horizon, ensuring developers could distinguish between genuinely different
              functionality
            </li>
            <li className="leading-relaxed">
              <strong>Structural consistency:</strong> Aligned top and left navigation layouts, documentation
              hierarchies, and interface elements like notification icons to create cohesive cross-platform experience
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Navigation alignment example</h2>

        <div className="mb-8">
          <h3 className="mb-4">Before</h3>
          <div className="bg-white border border-neutral-200">
            <div className="p-6 bg-neutral-50 space-y-4">
              <button
                onClick={() => setSelectedImage({
                  image: beforeImages[0],
                  alt: 'Developer experiences were fragmented all the way to the navigation, with different terms referring to similar concepts'
                })}
                className="cursor-zoom-in block w-full max-w-4xl mx-auto"
              >
                <ImageWithFallback
                  src={beforeImages[0]}
                  alt="Navigation example"
                  className="w-full h-auto"
                />
              </button>

              <button
                onClick={() => setSelectedImage({
                  image: beforeImages[1],
                  alt: 'Developer experiences were fragmented all the way to the navigation, with different terms referring to similar concepts'
                })}
                className="cursor-zoom-in block w-full max-w-4xl mx-auto"
              >
                <ImageWithFallback
                  src={beforeImages[1]}
                  alt="Navigation example"
                  className="w-full h-auto"
                />
              </button>

              <button
                onClick={() => setSelectedImage({
                  image: beforeImages[3],
                  alt: 'Developer experiences were fragmented all the way to the navigation, with different terms referring to similar concepts'
                })}
                className="cursor-zoom-in block w-full max-w-4xl mx-auto"
              >
                <ImageWithFallback
                  src={beforeImages[3]}
                  alt="Navigation example"
                  className="w-full h-auto"
                />
              </button>
            </div>

            <div className="px-6 py-4 bg-white flex flex-col md:flex-row gap-6 items-center">
              <button
                onClick={() => setSelectedImage({
                  image: beforeImages[2],
                  alt: 'Developer experiences were fragmented all the way to the navigation, with different terms referring to similar concepts'
                })}
                className="cursor-zoom-in block flex-shrink-0"
              >
                <ImageWithFallback
                  src={beforeImages[2]}
                  alt="Navigation example"
                  className="max-w-full h-auto"
                />
              </button>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm opacity-70 leading-relaxed max-w-lg">
                  Developer experiences were fragmented all the way to the navigation, with different terms referring to similar concepts. Each platform had developed its own vocabulary and structure independently, creating a disjointed experience for developers working across multiple Meta products.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4">After</h3>
          <div className="bg-white border border-neutral-200">
            <div className="p-6 bg-neutral-50">
              <button
                onClick={() => setSelectedImage({ image: afterImage.image, alt: afterImage.caption })}
                className="cursor-zoom-in block w-full max-w-4xl mx-auto"
              >
                <ImageWithFallback
                  src={afterImage.image}
                  alt={afterImage.caption}
                  className="w-full h-auto"
                />
              </button>
            </div>
            <div className="px-6 py-4 bg-white">
              <p className="text-sm opacity-70 leading-relaxed max-w-3xl mx-auto">{afterImage.caption}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Other taxonomy, style, and systems work</h2>

        <div className="mb-6">
          <h3 className="mb-3">Compliance messaging style guide</h3>
          <p className="leading-relaxed opacity-80 mb-3">
            Created a comprehensive wiki-based system to standardize Meta's App Review compliance messaging, ensuring
            developers received consistent, actionable guidance regardless of which reviewer handled their submission.
          </p>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              Established mandatory requirements including clear policy links, specific violation triggers, and
              actionable fix steps in every compliance message, eliminating vague rejections that left developers
              confused about remediation
            </li>
            <li className="leading-relaxed">
              Led cross-functional collaboration to rewrite over 200 common compliance responses, bringing legal,
              policy, and content design teams together to balance regulatory requirements with developer comprehension
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">Use case writing guide</h3>
          <p className="leading-relaxed opacity-80 mb-3">
            Created end-to-end platform-wide guide establishing content standards for all use cases, ensuring every
            developer-facing use case followed consistent patterns that improved discoverability and comprehension.
          </p>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              Established strict requirements including developer-focused verb-based titles (e.g., "Share content to
              Facebook" not "Content sharing"), mandatory product integration names for transparency, plain-language
              descriptions avoiding technical jargon, and explicit listing of unique requirements to prevent surprise
              implementation hurdles
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">Term governance for Reality Labs</h3>
          <p className="leading-relaxed opacity-80 mb-3">
            Served as term lead and reviewer for Reality Labs, establishing vocabulary standards for emerging VR/AR
            technologies where consistent terminology was critical for developer adoption.
          </p>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              Governed comprehensive strategy, tracking, and quality requirements for new vocabulary in Acrolinx,
              ensuring novel VR/AR concepts received clear, consistent names before reaching external developers
            </li>
            <li className="leading-relaxed">
              Streamlined database taxonomy to align internal Reality Labs terminology with broader developer platform
              structures, preventing the team from creating isolated vocabulary that confused developers familiar with
              other Meta platforms
            </li>
          </ul>
        </div>
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
