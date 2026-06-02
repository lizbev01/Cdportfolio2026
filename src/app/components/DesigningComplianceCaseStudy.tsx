import { CaseStudyLayout } from './CaseStudyLayout';
import { Slideshow } from './Slideshow';

interface DesigningComplianceCaseStudyProps {
  onBack: () => void;
}

const appReviewSlides = [
  {
    image: 'https://static.wixstatic.com/media/4c0acd_ddcb2bc645ae47ed9e9eb6b8fdfc00ab~mv2.jpg/v1/fill/w_1590,h_1149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_ddcb2bc645ae47ed9e9eb6b8fdfc00ab~mv2.jpg',
    caption: 'App Review submission page with status tracking and clear completion indicators.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_6407d499c9be4fbcab90f1ae1f3f98b7~mv2.jpg/v1/fill/w_1592,h_1149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_6407d499c9be4fbcab90f1ae1f3f98b7~mv2.jpg',
    caption: 'Data access permissions interface displaying requested permissions and their status throughout the review process.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_01d703a687ca488891e38becba616fa9~mv2.jpg/v1/fill/w_1592,h_1150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_01d703a687ca488891e38becba616fa9~mv2.jpg',
    caption: 'Review submission form with embedded legal terms links and error prevention safeguards.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_cb72f49978a04e02b6994fbde7265e63~mv2.jpg/v1/fill/w_1592,h_1149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_cb72f49978a04e02b6994fbde7265e63~mv2.jpg',
    caption: 'Confirmation modal informing developers of submission parameters and clearly indicating which terms and policies they are agreeing to.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_8fecbc87ffef40b88b26b2db7482b149~mv2.png/v1/fill/w_1034,h_866,al_c,q_90,enc_auto/4c0acd_8fecbc87ffef40b88b26b2db7482b149~mv2.png',
    caption: 'Automated email notification providing immediate confirmation of successful submission delivery.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_b0b7b5d37d514c06bd7074ced910de43~mv2.png/v1/fill/w_736,h_980,al_c,q_90,enc_auto/4c0acd_b0b7b5d37d514c06bd7074ced910de43~mv2.png',
    caption: 'Post-submission survey collecting developer feedback for continuous improvement of the review experience.'
  }
];

const dataAccessFormSlides = [
  {
    image: 'https://static.wixstatic.com/media/4c0acd_dd13081e21cb4f3bb414d4763b8c6206~mv2.jpg/v1/fill/w_1904,h_1149,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_dd13081e21cb4f3bb414d4763b8c6206~mv2.jpg',
    caption: 'Data access request form with standardized, conversational language replacing technical jargon.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_0107efd8000c4eb2a7eaae01be256dcb~mv2.jpg/v1/fill/w_1908,h_1149,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_0107efd8000c4eb2a7eaae01be256dcb~mv2.jpg',
    caption: 'Reusable text strings and contextual uploader ensuring consistency across 100+ permissions.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_e6130360dced48d196c56d9669032682~mv2.jpg/v1/fill/w_1410,h_1149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_e6130360dced48d196c56d9669032682~mv2.jpg',
    caption: 'Developers attest that the app will use requested permissions according to allowed usage, all in one place.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_b851f37831e94d8186fa53252104e71e~mv2.jpg/v1/fill/w_1906,h_1149,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_b851f37831e94d8186fa53252104e71e~mv2.jpg',
    caption: 'Step completion indicators with progress tracker at top and well-placed next button to continue.'
  }
];

const appViolationsSlides = [
  {
    image: 'https://static.wixstatic.com/media/4c0acd_c04dec2e919642dda57245351979172f~mv2.jpg/v1/fill/w_1494,h_1149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_c04dec2e919642dda57245351979172f~mv2.jpg',
    caption: 'Layered status messaging on rejected App Review submission with direct entry point to resolution path.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_aaf31cbb55b542dea50a31a9166a0d07~mv2.jpg/v1/fill/w_1456,h_895,al_c,q_85,enc_auto/4c0acd_aaf31cbb55b542dea50a31a9166a0d07~mv2.jpg',
    caption: 'View of the Required Actions inbox where all violations can be resolved.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_08337f12406b40bfbbf7484d1ed04ea9~mv2.jpg/v1/fill/w_2086,h_1149,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_08337f12406b40bfbbf7484d1ed04ea9~mv2.jpg',
    caption: 'Open required actions notification with link to violation details.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_831a831b7cf04fe591d7244723a226de~mv2.jpg/v1/fill/w_966,h_752,al_c,q_85,enc_auto/4c0acd_831a831b7cf04fe591d7244723a226de~mv2.jpg',
    caption: 'Open violation with enough detail so developers can action the feedback immediately.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_9eaa1ef86b5c4f87ad86c8349e1e30d0~mv2.jpg/v1/fill/w_966,h_850,al_c,q_85,enc_auto/4c0acd_9eaa1ef86b5c4f87ad86c8349e1e30d0~mv2.jpg',
    caption: 'Confirmation modal ensuring developer intent for sensitive actions.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_c975e3f590bc4de4b7b4bc31f997521c~mv2.jpg/v1/fill/w_779,h_745,al_c,q_85,enc_auto/4c0acd_c975e3f590bc4de4b7b4bc31f997521c~mv2.jpg',
    caption: 'Email notification to developer detailing violations and next steps.'
  }
];

export function DesigningComplianceCaseStudy({ onBack }: DesigningComplianceCaseStudyProps) {
  return (
    <CaseStudyLayout
      title="Designing compliance"
      company="Meta"
      summary="Overhaul of Meta's third-party developer App Review process through user research translation into transparent workflow and clear content structure, maintaining legal guardrails while centralizing terminology."
      onBack={onBack}
    >
      <section className="mb-12">
        <h2 className="mb-6">Case study 1: App Review submission</h2>

        <div className="mb-6">
          <h3 className="mb-3">The challenge</h3>
          <p className="leading-relaxed opacity-80">
            Developers experienced friction from opaque tracking, missing confirmations, and unclear legal terms,
            eroding trust and delaying revenue while increasing Meta's compliance risk.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">The approach</h3>
          <p className="leading-relaxed opacity-80 mb-4">
            Translated user research into a transparent interaction workflow and clear content structure while
            maintaining strict legal guardrails and centralizing new product terminology.
          </p>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              <strong>Progress tracking:</strong> Advocated for green checkmarks as clear completion indicators at
              every step, eliminating the opaque tracking that frustrated developers and allowed them to understand
              exactly where they were in the process
            </li>
            <li className="leading-relaxed">
              <strong>Final step clarity:</strong> Designed a comprehensive confirmation modal that summarized all
              key information before submission, ensuring developers understood exactly what they were submitting
              and reducing submission errors
            </li>
            <li className="leading-relaxed">
              <strong>Error prevention:</strong> Locked forms post-submission to prevent accidental edits and embedded
              direct links to legal terms and conditions within the flow, replacing ambiguous legal language with
              accessible explanations
            </li>
            <li className="leading-relaxed">
              <strong>Notification system:</strong> Designed automated email and push notifications that provided
              immediate confirmation of successful delivery, addressing the critical trust gap from missing confirmations
            </li>
            <li className="leading-relaxed">
              <strong>Continuous improvement loop:</strong> Introduced an optional post-submission survey to enable
              ongoing tracking and improvement of the developer experience based on real feedback
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">The impact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
              <div className="mb-2">
                <span className="opacity-60">Time-to-submission reduction</span>
              </div>
              <p className="leading-relaxed">
                Reduced average time-to-submission by 90%: from 36 days to 4 days
              </p>
            </div>
            <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
              <div className="mb-2">
                <span className="opacity-60">Compliance efficiency</span>
              </div>
              <p className="leading-relaxed">
                Decreased Meta's compliance resource requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">Visual walkthrough</h2>
        <Slideshow slides={appReviewSlides} />
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Case study 2: data access request forms</h2>

        <div className="mb-6">
          <h3 className="mb-3">The challenge</h3>
          <p className="leading-relaxed opacity-80">
            App Review forms contained jargon, inconsistent terminology, and hidden requirements. Upload tools at
            bottom of long forms overwhelmed developers.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">The approach</h3>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              <strong>Standardization at scale:</strong> Analyzed 100+ permissions to identify shared patterns across
              the platform and created reusable text strings that ensured consistency and reduced the jargon overload
              that confused developers
            </li>
            <li className="leading-relaxed">
              <strong>Tonal recalibration:</strong> Shifted from formal legal tone to conversational yet serious language,
              reducing developer stress during compliance processes while maintaining appropriate gravity
            </li>
            <li className="leading-relaxed">
              <strong>Structural reorganization:</strong> Relocated upload tools from the bottom of lengthy forms to
              contextually relevant sections where developers actually needed them
            </li>
            <li className="leading-relaxed">
              <strong>Modal implementation:</strong> Designed modals that allowed developers to complete requirements
              without leaving the page, streamlining the workflow and reducing cognitive burden
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">The impact</h3>
          <p className="leading-relaxed opacity-80 mb-4">
            Smoother developer experience with easier submission tracking.
          </p>
          <p className="leading-relaxed opacity-80">
            Reduced back-and-forth between reviewers and developers through first-submission requirement completion.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">Visual walkthrough</h2>
        <Slideshow slides={dataAccessFormSlides} />
      </section>

      <section className="mb-12">
        <h2 className="mb-6">Case study 3: app violations in App Review</h2>

        <div className="mb-6">
          <h3 className="mb-3">The challenge</h3>
          <p className="leading-relaxed opacity-80">
            Compliance experience confused developers whose apps violated rules through lack of context, inconsistent
            terms, and unclear remediation steps, cutting data access and partner revenue.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">The approach</h3>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              <strong>Multi-level status visibility:</strong> Displayed exact submission status at both app-level and
              individual permission-level, providing developers with granular understanding of where issues existed
              instead of vague rejection notices
            </li>
            <li className="leading-relaxed">
              <strong>Language softening:</strong> Replaced the punitive term "Rejected" with "Not approved" for less
              harsh framing that maintained professionalism while reducing developer frustration and defensiveness
            </li>
            <li className="leading-relaxed">
              <strong>Comprehensive violation context:</strong> Explained the specific violation reason, which policy
              was broken, and the data access cutoff date, replacing the lack of context that previously confused
              developers about remediation steps
            </li>
            <li className="leading-relaxed">
              <strong>Smart navigation with deep-linking:</strong> Implemented direct links to pre-filled problematic
              submission sections, allowing developers to immediately fix issues rather than hunting through forms
              to find what needed correction
            </li>
            <li className="leading-relaxed">
              <strong>Proactive remediation guidance:</strong> Provided recommended changes tailored to each violation
              to increase next-review success rates and reduce the cycle time for getting apps approved
            </li>
            <li className="leading-relaxed">
              <strong>Immediate feedback loop:</strong> Automated receipt confirmation sent upon resubmission, ensuring
              developers knew their changes were received and being processed
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">The impact</h3>
          <p className="leading-relaxed opacity-80 mb-4">
            Clearer developer expectations for rejections.
          </p>
          <p className="leading-relaxed opacity-80">
            Decreased communications needed for appeal resolution; downward trend in Need More Information requests.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">Visual walkthrough</h2>
        <Slideshow slides={appViolationsSlides} />
      </section>
    </CaseStudyLayout>
  );
}
