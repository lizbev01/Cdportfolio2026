import { CaseStudyLayout } from './CaseStudyLayout';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Slideshow } from './Slideshow';
import { VideoComparison } from './VideoComparison';
import beforeVideo from '../../imports/Before_-_DFC.mp4';
import afterVideo from '../../imports/After_-_DFC_.mp4';

interface AppCreationCaseStudyProps {
  onBack: () => void;
}

const slideshowSlides = [
  {
    image: 'https://static.wixstatic.com/media/4c0acd_050e6c496e6e4fbaa0c15644df3554aa~mv2.png/v1/fill/w_1876,h_978,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c0acd_050e6c496e6e4fbaa0c15644df3554aa~mv2.png',
    caption: 'We start by gathering basic info about the app the developer wants to build.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_c3ed4c6097bc45a8995bb247e78dcd8a~mv2.png/v1/fill/w_1876,h_984,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c0acd_c3ed4c6097bc45a8995bb247e78dcd8a~mv2.png',
    caption: 'I organized over 100 permissions and features, and 45 products into 19 easy-to-understand use cases for developers to pick from.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_70824f610c0e4e3192cef88b3b39a1f4~mv2.png/v1/fill/w_1716,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_70824f610c0e4e3192cef88b3b39a1f4~mv2.png',
    caption: 'The developer is asked to select a business early in the process, helping Meta track who is building on our platform and verification checks.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_c74e56db5d8546d198d5b05332d4cc02~mv2.png/v1/fill/w_2022,h_1062,al_c,q_95,enc_auto/4c0acd_c74e56db5d8546d198d5b05332d4cc02~mv2.png',
    caption: 'This step clearly outlines the legal and compliance requirements for this app to get access to user and business data.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_29156351faa443b485406d4fc77797ab~mv2.png/v1/fill/w_1182,h_1150,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c0acd_29156351faa443b485406d4fc77797ab~mv2.png',
    caption: 'The developer can then see all the decisions they made in the creation process, and are able to go back and make changes if needed.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_bb72ef0becb843d080f76df7f5c8aa01~mv2.png/v1/fill/w_2131,h_1112,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_bb72ef0becb843d080f76df7f5c8aa01~mv2.png',
    caption: 'Clear step-by-step dashboard to guide the developer through the steps required to gain data access.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_e621248ef1d5474c87de9b21e1c3e8da~mv2.png/v1/fill/w_2204,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_e621248ef1d5474c87de9b21e1c3e8da~mv2.png',
    caption: 'Use case customization shows only relevant permissions and products, with necessary permissions auto-added for working integrations.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_1a06f502984348fdba2e91abdc5a6062~mv2.png/v1/fill/w_2204,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_1a06f502984348fdba2e91abdc5a6062~mv2.png',
    caption: 'A comprehensive view of every task needed for app creation and publication, with progress tracking showing finished and remaining work.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_4012bdf66c944e6190c958489ebd273c~mv2.png/v1/fill/w_2202,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_4012bdf66c944e6190c958489ebd273c~mv2.png',
    caption: 'The developer can clearly see how to test their integrations and how many successful tests are required for data access requests.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_007b1b89bd7545a2a1af96abbe5255b3~mv2.png/v1/fill/w_2196,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_007b1b89bd7545a2a1af96abbe5255b3~mv2.png',
    caption: 'The developer can review all permissions included in their App Review submission, and see which use cases each permission belongs to.'
  },
  {
    image: 'https://static.wixstatic.com/media/4c0acd_d07c462f4f354c488fbefa7f33ac045b~mv2.png/v1/fill/w_2206,h_1149,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/4c0acd_d07c462f4f354c488fbefa7f33ac045b~mv2.png',
    caption: 'The dev can review all incomplete requirements and an overview of use cases added to the app.'
  }
];

export function AppCreationCaseStudy({ onBack }: AppCreationCaseStudyProps) {
  return (
    <CaseStudyLayout
      title="App creation for developers"
      company="Meta"
      summary="A platform design-developer mismatch created a confusing, guidance-free setup process. This caused excessive permission requests and security risks for Meta. The solution involved redesigning with clear use cases, improved information architecture, and better tracking to simplify the experience and reduce risk."
      onBack={onBack}
    >
      <section className="mb-12">
        <h2 className="mb-4">The challenge</h2>
        <p className="leading-relaxed opacity-80 mb-4">
          Meta's developer platform app creation was confusing and filled with technical jargon without guidance.
          Developers didn't understand requirements, leading them to request broad data access they didn't use.
        </p>
        <p className="leading-relaxed opacity-80">
          This created high <span className="font-medium">can_access</span> rates but low{' '}
          <span className="font-medium">did_access</span> rates, resulting in a poor developer experience and privacy
          risk for Meta.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">The approach</h2>

        <div className="mb-6">
          <h3 className="mb-3">Cross-functional collaboration</h3>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              Partnered with product design, UX research, data science, legal, policy, and privacy teams to
              rebuild the end-to-end process
            </li>
            <li className="leading-relaxed">
              Researched Meta's ecosystem (Instagram, WhatsApp, Facebook, Horizon, Ray-Ban, LLMs) to unite
              separate tools into one platform
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">Information architecture improvements</h3>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              Organized 100+ raw API permissions, features, and products into use cases mapped to developer
              intent
            </li>
            <li className="leading-relaxed">
              Created a scalable style guide for future platform use cases
            </li>
            <li className="leading-relaxed">
              Integrated legal/compliance disclosures into the selection workflow
            </li>
            <li className="leading-relaxed">
              Designed structured to-do lists with completion statuses, logical step ordering, and error states
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">Content design methodology</h3>
          <ul className="space-y-3 opacity-80">
            <li className="leading-relaxed">
              Applied plain language principles to translate technical API terminology into developer-friendly use case names
            </li>
            <li className="leading-relaxed">
              Built a taxonomy system that grouped related permissions by developer goals rather than technical implementation
            </li>
            <li className="leading-relaxed">
              Crafted contextual microcopy and guidance at each decision point to reduce cognitive load and prevent errors
            </li>
            <li className="leading-relaxed">
              Designed content patterns that scale across 19 use cases while maintaining consistency and clarity
            </li>
            <li className="leading-relaxed">
              Created progressive disclosure strategies to show only relevant information at each step of the workflow
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">Visual walkthrough</h2>
        <Slideshow slides={slideshowSlides} />
      </section>

      <section className="mb-12 bg-neutral-50 -mx-6 px-6 py-10">
        <h2 className="mb-4">Highlight: permissions, features and use cases</h2>

        <div className="mb-6">
          <h3 className="mb-3">The challenge</h3>
          <p className="leading-relaxed opacity-80 mb-4">
            Over 100 unorganized permissions with technical names plus 45 products overwhelmed developers.
            They relied on incomplete documentation or external forums.
          </p>
          <p className="leading-relaxed opacity-80">
            Multiple Meta platforms were required for simple integrations like app ads, causing
            over-permissioning, unclear developer intent, and complex federal reporting.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">The approach</h3>
          <ul className="space-y-4 opacity-80">
            <li className="leading-relaxed">
              Partnered with Data Science to analyze historical access data (can_access & did_access rates),
              identifying commonly co-used permissions, features, and products
            </li>
            <li className="leading-relaxed">
              Aligned with 19 internal product teams on integration requirements
            </li>
            <li className="leading-relaxed">
              Created use cases from requirements, reducing choices and cognitive overload (applying Hick's Law)
            </li>
            <li className="leading-relaxed">
              Authored a platform style guide for consistent future use case content and UI
            </li>
            <li className="leading-relaxed">
              Connected existing platforms and terminology guides for common developer tasks
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="mb-4">Impact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
              <div className="mb-2">
                <span className="opacity-60">did_access improvement</span>
              </div>
              <p className="leading-relaxed">
                42% increase in did_access rates, showing alignment with actual developer needs
              </p>
            </div>
            <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--teal-dark)' }}>
              <div className="mb-2">
                <span className="opacity-60">App ads creation experience</span>
              </div>
              <p className="leading-relaxed">
                Shortened from 46 steps on 4 platforms down to less than 20 steps on 2 platforms
              </p>
            </div>
          </div>
        </div>

        <VideoComparison
          beforeVideo={beforeVideo}
          afterVideo={afterVideo}
          beforeSpeed={1.25}
        />
      </section>

      <section className="mb-12 pt-8 border-t border-neutral-200">
        <h2 className="mb-4">More information</h2>
        <p className="leading-relaxed opacity-80 mb-4">
          When this project was just getting started, Meta published an announcement about the shift to App Use Cases:
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
