import { CaseStudyLayout } from './CaseStudyLayout';
import { Slideshow } from './Slideshow';
import { VideoComparison } from './VideoComparison';
import beforeVideo from '../../imports/Before_-_DFC.mp4';
import afterVideo from '../../imports/After_-_DFC_.mp4';
import appReview2Image from '../../imports/appreview2.webp';

interface AppCreationCaseStudyProps {
  onBack: () => void;
}

const appCreationSlides = [
  {
    image: 'https://static.wixstatic.com/media/4c0acd_050e6c496e6e4fbaa0c15644df3554aa~mv2.png/v1/fill/w_1876,h_978,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c0acd_050e6c496e6e4fbaa0c15644df3554aa~mv2.png',
    caption: 'App creation starts by gathering basic information about the app the developer wants to build.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_c3ed4c6097bc45a8995bb247e78dcd8a~mv2.png/v1/fill/w_1876,h_984,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c0acd_c3ed4c6097bc45a8995bb247e78dcd8a~mv2.png',
    caption: 'I organized over 100 permissions and features, and 45 products into 19 easy-to-understand use cases for developers to choose from.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_70824f610c0e4e3192cef88b3b39a1f4~mv2.png/v1/fill/w_1716,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_70824f610c0e4e3192cef88b3b39a1f4~mv2.png',
    caption: 'Developers select a business early in the process, helping Meta understand who is building on the platform and support verification checks.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_c74e56db5d8546d198d5b05332d4cc02~mv2.png/v1/fill/w_2022,h_1062,al_c,q_95,enc_auto/4c0acd_c74e56db5d8546d198d5b05332d4cc02~mv2.png',
    caption: 'The workflow clearly explains legal and compliance requirements before the app can access user and business data.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_29156351faa443b485406d4fc77797ab~mv2.png/v1/fill/w_1182,h_1150,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_29156351faa443b485406d4fc77797ab~mv2.png',
    caption: 'Developers can review the decisions they made during app creation and go back to make changes when needed.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_bb72ef0becb843d080f76df7f5c8aa01~mv2.png/v1/fill/w_2131,h_1112,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_bb72ef0becb843d080f76df7f5c8aa01~mv2.png',
    caption: 'A step-by-step dashboard guides developers through the tasks required to gain data access.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_e621248ef1d5474c87de9b21e1c3e8da~mv2.png/v1/fill/w_2204,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_e621248ef1d5474c87de9b21e1c3e8da~mv2.png',
    caption: 'Use case customization shows only relevant permissions and products, with necessary permissions auto-added for working integrations.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_4012bdf66c944e6190c958489ebd273c~mv2.png/v1/fill/w_2202,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_4012bdf66c944e6190c958489ebd273c~mv2.png',
    caption: 'Developers can see how to test integrations and how many successful tests are required before requesting data access.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_007b1b89bd7545a2a1af96abbe5255b3~mv2.png/v1/fill/w_2196,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_007b1b89bd7545a2a1af96abbe5255b3~mv2.png',
    caption: 'Developers can review all permissions included in the App Review submission and see which use cases each permission belongs to.'
  },
  {
    image: appReview2Image,
    caption: 'Submit for App Review page showing completed verification and app settings steps, remaining allowed usage and data handling tasks, and the disabled submit state until requirements are complete.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_dd13081e21cb4f3bb414d4763b8c6206~mv2.jpg/v1/fill/w_1904,h_1149,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_dd13081e21cb4f3bb414d4763b8c6206~mv2.jpg',
    caption: 'Data access request form with standardized, conversational language replacing technical jargon.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_0107efd8000c4eb2a7eaae01be256dcb~mv2.jpg/v1/fill/w_1908,h_1149,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_0107efd8000c4eb2a7eaae01be256dcb~mv2.jpg',
    caption: 'Reusable text strings and contextual upload guidance keep requirements consistent across 100+ permissions.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_e6130360dced48d196c56d9669032682~mv2.jpg/v1/fill/w_1410,h_1149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_e6130360dced48d196c56d9669032682~mv2.jpg',
    caption: 'Developers attest that requested permissions will be used according to allowed usage, all in one place.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_b851f37831e94d8186fa53252104e71e~mv2.jpg/v1/fill/w_1906,h_1149,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_b851f37831e94d8186fa53252104e71e~mv2.jpg',
    caption: 'Step completion indicators and a progress tracker make it clear how to continue.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_01d703a687ca488891e38becba616fa9~mv2.jpg/v1/fill/w_1592,h_1150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_01d703a687ca488891e38becba616fa9~mv2.jpg',
    caption: 'Review submission form with embedded legal terms links and error prevention safeguards.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_cb72f49978a04e02b6994fbde7265e63~mv2.jpg/v1/fill/w_1592,h_1149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_cb72f49978a04e02b6994fbde7265e63~mv2.jpg',
    caption: 'Confirmation modal explains submission parameters and the terms and policies developers are agreeing to.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_8fecbc87ffef40b88b26b2db7482b149~mv2.png/v1/fill/w_1034,h_866,al_c,q_90,enc_auto/4c0acd_8fecbc87ffef40b88b26b2db7482b149~mv2.png',
    caption: 'Automated email notification provides immediate confirmation of successful submission delivery.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_d07c462f4f354c488fbefa7f33ac045b~mv2.png/v1/fill/w_2206,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_d07c462f4f354c488fbefa7f33ac045b~mv2.png',
    caption: 'Developers can review incomplete requirements and an overview of the use cases added to the app.'
  }
];

const complianceSlides = [
  {
    image: 'https://static.wixstatic.com/media/4c0acd_c04dec2e919642dda57245351979172f~mv2.jpg/v1/fill/w_1494,h_1149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c0acd_c04dec2e919642dda57245351979172f~mv2.jpg',
    caption: 'Layered status messaging on a rejected App Review submission gives developers a direct path to resolution.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_c975e3f590bc4de4b7b4bc31f997521c~mv2.jpg/v1/fill/w_779,h_745,al_c,q_85,enc_auto/4c0acd_c975e3f590bc4de4b7b4bc31f997521c~mv2.jpg',
    caption: 'Email notification details violations and next steps.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_aaf31cbb55b542dea50a31a9166a0d07~mv2.jpg/v1/fill/w_1456,h_895,al_c,q_85,enc_auto/4c0acd_aaf31cbb55b542dea50a31a9166a0d07~mv2.jpg',
    caption: 'Required Actions inbox centralizes app violations that need to be resolved to resume, retain, or gain data access.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_08337f12406b40bfbbf7484d1ed04ea9~mv2.jpg/v1/fill/w_2086,h_1149,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_08337f12406b40bfbbf7484d1ed04ea9~mv2.jpg',
    caption: 'Open required actions notification with a link to violation details.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_831a831b7cf04fe591d7244723a226de~mv2.jpg/v1/fill/w_966,h_752,al_c,q_85,enc_auto/4c0acd_831a831b7cf04fe591d7244723a226de~mv2.jpg',
    caption: 'Open violation details include enough context for developers to act on the feedback immediately.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_9eaa1ef86b5c4f87ad86c8349e1e30d0~mv2.jpg/v1/fill/w_966,h_850,al_c,q_85,enc_auto/4c0acd_9eaa1ef86b5c4f87ad86c8349e1e30d0~mv2.jpg',
    caption: 'Confirmation modal supports developer intent for sensitive actions.'
  }
];

export const developerExperienceSlides = [...appCreationSlides, ...complianceSlides];

export function AppCreationCaseStudy({ onBack }: AppCreationCaseStudyProps) {
  return (
    <CaseStudyLayout
      title="Designing a clearer path to trusted data access"
      company="Meta"
      summary="Full end-to-end content design for the developer experience on developers.facebook.com, from app creation, permission selection, and technical documentation through App Review, compliance requirements, and violation remediation. I used content design, information architecture, and systems thinking to make complex platform rules easier to understand while reducing privacy, legal, and operational risk."
      onBack={onBack}
    >
      <section className="mb-12">
        <h2 className="mb-4">The challenge</h2>
        <p className="leading-relaxed opacity-80 mb-4">
          Developers needed a clearer path from app setup to approved data access. The experience on developers.facebook.com
          was fragmented across permission selection, technical documentation, testing, submission, review, and remediation,
          making it difficult to understand what to request, which requirements applied, and how to move forward with confidence.
        </p>
        <p className="leading-relaxed opacity-80">
          This friction created two related risks. Developers could request broader access than they needed,
          increasing privacy and platform risk, then encounter review flows that felt opaque, inconsistent, and
          difficult to trust. The opportunity was to redesign the journey as one guided path from intent to approval.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">The approach</h2>
        <p className="leading-relaxed opacity-80 mb-6">
          I led full end-to-end content design for the developer experience on developers.facebook.com across app setup,
          permission selection, technical documentation, testing, submission, review, and remediation. I treated app creation,
          data-access requests, technical documentation, App Review, compliance messaging, and violation remediation as one
          connected service experience rather than separate product surfaces.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-3">Guide the choice</h3>
            <p className="leading-relaxed opacity-80">
              I reframed app creation around developer intent instead of raw API terminology, organizing permissions,
              features, and products into use cases that helped developers understand what to request and why.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Clarify the requirements</h3>
            <p className="leading-relaxed opacity-80">
              I brought legal, policy, privacy, and product requirements into the flow using clearer language,
              reusable content patterns, completion states, and contextual guidance at key decision points.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Make review transparent</h3>
            <p className="leading-relaxed opacity-80">
              I redesigned App Review content around status visibility, submission confidence, confirmation,
              and remediation so developers could understand what was happening and what to do next.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Scale the system</h3>
            <p className="leading-relaxed opacity-80">
              I created reusable terminology, writing patterns, and interface guidance that could scale across
              many permissions, products, teams, and compliance scenarios without creating a new one-off solution each time.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-neutral-50 -mx-6 px-6 py-10">
        <h2 className="mb-4">Part one: app creation and permission selection</h2>
        <p className="leading-relaxed opacity-80 mb-6">
          The first part of the work focused on helping developers make better setup decisions before they reached
          compliance review. I partnered with product design, UX research, data science, legal, policy, and privacy
          teams to replace technical permission lists with a more guided experience based on developer goals.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="mb-3">Information architecture</h3>
            <ul className="space-y-3 opacity-80">
              <li className="leading-relaxed">Organized 100+ raw API permissions, features, and products into use cases mapped to developer intent.</li>
              <li className="leading-relaxed">Grouped related requirements by what developers were trying to build rather than by internal product structure.</li>
              <li className="leading-relaxed">Designed progressive disclosure so developers saw relevant permissions, products, testing steps, and requirements when they needed them.</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3">Content design</h3>
            <ul className="space-y-3 opacity-80">
              <li className="leading-relaxed">Translated technical API terminology into plain-language use case names and descriptions.</li>
              <li className="leading-relaxed">Built consistent microcopy, task states, and decision-point guidance across the setup journey.</li>
              <li className="leading-relaxed">Integrated legal and compliance disclosures into the selection workflow without overwhelming developers.</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <div className="mb-2">
              <span className="opacity-60">did_access improvement</span>
            </div>
            <p className="leading-relaxed">
              42% increase in did_access rates, showing stronger alignment between requested access and actual developer needs.
            </p>
          </div>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <div className="mb-2">
              <span className="opacity-60">App ads creation experience</span>
            </div>
            <p className="leading-relaxed">
              Shortened from 46 steps on 4 platforms to fewer than 20 steps on 2 platforms.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <VideoComparison
            beforeVideo={beforeVideo}
            afterVideo={afterVideo}
            beforeSpeed={1.25}
          />
        </div>
      </section>

      <section className="mb-12 bg-neutral-50 -mx-6 px-6 py-10">
        <h2 className="mb-4">Part two: compliance, App Review, and remediation</h2>
        <p className="leading-relaxed opacity-80 mb-6">
          Once developers had created an app and selected permissions, the next challenge was helping them understand
          how to submit, track, and resolve compliance requirements. I extended the same content strategy into App
          Review so requirements were visible, language was consistent, and remediation paths were easier to follow.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-3">Submission clarity</h3>
            <p className="leading-relaxed opacity-80">
              I clarified final-step review patterns with progress indicators, confirmation modals, legal terms links,
              and locked post-submission states to reduce errors and build trust.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Reusable requirements</h3>
            <p className="leading-relaxed opacity-80">
              I standardized conversational text strings and contextual upload guidance across 100+ permissions so
              developers could understand what evidence or information was required.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Actionable remediation</h3>
            <p className="leading-relaxed opacity-80">
              I softened punitive language, added detailed violation context, and created direct paths back to the
              sections developers needed to fix.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <div className="mb-2">
              <span className="opacity-60">Time-to-submission reduction</span>
            </div>
            <p className="leading-relaxed">
              Reduced average time to submission by 90%, from 36 days to 4 days.
            </p>
          </div>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
            <div className="mb-2">
              <span className="opacity-60">Review efficiency</span>
            </div>
            <p className="leading-relaxed">
              Reduced back-and-forth between reviewers and developers by making requirements, status, and next steps clearer.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">App creation and App Review walkthrough</h2>
        <p className="leading-relaxed opacity-80 mb-6">
          This sequence follows the developer journey from app setup through permission selection, testing, data-access
          requests, and App Review submission.
        </p>
        <Slideshow slides={appCreationSlides} />
      </section>

      <section className="mb-12">
        <h2 className="mb-4">Compliance and remediation walkthrough</h2>
        <p className="leading-relaxed opacity-80 mb-6">
          This sequence focuses on the compliance experience, including violation notifications, required actions,
          remediation details, and confirmation patterns for sensitive actions.
        </p>
        <Slideshow slides={complianceSlides} />
      </section>

      <section className="mb-12 pt-8 border-t border-neutral-200">
        <h2 className="mb-4">More information</h2>
        <p className="leading-relaxed opacity-80 mb-4">
          When this work was getting started, Meta published an announcement about the shift to App Use Cases.
        </p>
        <a
          href="https://developers.facebook.com/blog/post/2022/12/07/creating-apps-with-app-use-cases/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 hover:bg-teal-dark hover:text-white transition-colors"
          style={{ borderColor: 'var(--teal-dark)', color: 'var(--teal-dark)' }}
        >
          <span>Creating Apps with App Use Cases</span>
          <span>→</span>
        </a>
        <p className="leading-relaxed opacity-60 mt-4 text-sm">
          Meta Developer Blog • December 7, 2022
        </p>
      </section>
    </CaseStudyLayout>
  );
}
