import { CaseStudyLayout } from './CaseStudyLayout';
import { Slideshow } from './Slideshow';
import { VideoComparison } from './VideoComparison';

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
        <h2 className="mb-4">Visual walkthrough</h2>
        <Slideshow slides={slideshowSlides} />
      </section>

      <section className="mb-12">
        <h2 className="mb-4">Impact</h2>
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
      </section>
    </CaseStudyLayout>
  );
}
