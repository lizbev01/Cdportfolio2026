import { CaseStudyLayout } from './CaseStudyLayout';
import aiDeveloperCenterWireframe from '../assets/ai-developer-center-wireframe.png';

interface AIDeveloperCenterCaseStudyProps {
  onBack: () => void;
}

export function AIDeveloperCenterCaseStudy({ onBack }: AIDeveloperCenterCaseStudyProps) {
  return (
    <CaseStudyLayout
      title="Building an AI developer center"
      company="Meta"
      summary="A content design and information architecture case study for a new AI developer center that helped third-party developers create, test, review, and publish AI skills while meeting quality, data access, and compliance requirements."
      onBack={onBack}
    >
      <section className="mb-12">
        <h2 className="mb-4">The challenge</h2>
        <p className="leading-relaxed opacity-80 mb-4">
          Meta was entering a new AI developer platform space with new concepts, new internal workflows, and fast-moving
          competitors. The company needed to stand up an AI developer center for third-party developers, starting with
          skill creation, while making the experience clear enough for developers to build quickly.
        </p>
        <p className="leading-relaxed opacity-80">
          The core content challenge was to help developers understand how to build quality AI products as fast as possible
          while maintaining strict data access rules, meeting compliance requirements, and following international law.
          The work needed to translate emerging AI concepts into practical developer guidance without exposing internal
          complexity.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">The approach</h2>
        <p className="leading-relaxed opacity-80 mb-4">
          I started with deep research across internal AI experts, skill users, managed business partners, and competitive
          platforms such as Manus and Claude. I also partnered with UX research colleagues on developer behavior research
          sessions to understand how developers expected to create, test, and improve AI skills.
        </p>
        <p className="leading-relaxed opacity-80 mb-4">
          I used that research to create lightweight end-to-end wireframes and a prototype for a new developer center
          experience. The goal was to show how content design could guide developers from discovery through publishing,
          while making every step actionable, testable, and aligned with Meta's broader developer ecosystem.
        </p>
        <p className="leading-relaxed opacity-80 mb-4">
          I also consulted with managed business partners such as OpenTable to understand real-world needs. For example,
          partners wanted skills that could complete practical tasks such as booking a restaurant reservation for a user,
          which helped ground the flow in concrete developer use cases.
        </p>
        <p className="leading-relaxed opacity-80">
          The prototype is currently in user testing with industry developers, with early results trending positive. That
          feedback is helping validate the proposed journey, refine content priorities, and identify where developers need
          more guidance before moving toward review or publishing.
        </p>
      </section>

      <section className="mb-12 bg-neutral-50 -mx-6 px-6 py-10">
        <h2 className="mb-4">What the wireframes covered</h2>
        <p className="leading-relaxed opacity-80 mb-6 max-w-4xl">
          This mock-up represents an in-progress, unshipped product concept that is being prototyped and user tested with
          industry developers. The wireframe maps how developers could move from the AI Developer Center home screen into
          build, documentation, testing, evaluation, connection to Meta surfaces, review, and publishing. It also shows the
          content foundation behind the flow, including shared docs and terminology, guardrails, error recovery, compliance
          feedback, and a consistent developer-center voice.
        </p>
        <figure className="bg-white border border-neutral-200 p-3 md:p-5 shadow-sm">
          <img
            src={aiDeveloperCenterWireframe}
            alt="Low-fidelity AI Developer Center wireframe showing Home, Documentation, Build, Test, Evaluate, Connect, Meta Review, and Publish steps."
            className="w-full h-auto block"
          />
          <figcaption className="mt-4 text-sm leading-relaxed opacity-70">
            Low-fidelity mock-up of the AI Developer Center flow. The product is in progress, has not shipped yet, and is
            being tested with industry developers.
          </figcaption>
        </figure>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">Content strategy responsibilities</h2>
        <p className="leading-relaxed opacity-80 mb-6">
          The work extended beyond page-level UX writing. I was responsible for creating the content system that made the
          experience coherent, including chat agent guardrails, error handling, tone and voice, terminology, and the
          product language needed to help developers understand what the AI Agent was doing on their behalf.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-3">Developer-center alignment</h3>
            <p className="leading-relaxed opacity-80">
              Aligned the AI developer center with existing Meta developer centers so the experience used familiar
              navigation patterns, shared terminology, and consistent technical documentation structures.
            </p>
          </div>
          <div>
            <h3 className="mb-3">In-order technical docs</h3>
            <p className="leading-relaxed opacity-80">
              Shaped a shallow, in-order documentation set that moved from foundational concepts such as What is a Skill?
              through branding best practices, build guidance, and compliance requirements for publishing.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Agent voice and safety</h3>
            <p className="leading-relaxed opacity-80">
              Defined chat agent guardrails, error states, quality feedback, and tone patterns that aligned with Meta's
              mission, content standards, and Big-hearted Nerd voice.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-neutral-50 -mx-6 px-6 py-10">
        <h2 className="mb-4">Content principles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-3">Make the fastest path obvious</h3>
            <p className="leading-relaxed opacity-80">
              The home screen and build flow were structured around immediate action, helping developers choose whether to
              generate a skill with an AI Agent or upload an existing file, then continue through customization, testing,
              evaluation, review, and publishing.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Make quality requirements actionable</h3>
            <p className="leading-relaxed opacity-80">
              Compliance, evals, and review feedback were written to help developers understand what failed, why it
              mattered, and what to change next, rather than treating review as a black box.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Use industry language carefully</h3>
            <p className="leading-relaxed opacity-80">
              Because AI development introduced new terms and expectations, the content system balanced industry-standard
              language with plain explanations that made Meta-specific requirements easier to understand.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Keep the ecosystem consistent</h3>
            <p className="leading-relaxed opacity-80">
              The AI developer center needed to feel new without feeling disconnected. Shared terminology and documentation
              patterns helped developers move between Meta surfaces with less relearning.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4">The outcome</h2>
        <p className="leading-relaxed opacity-80 mb-4">
          The proposed AI developer center gave teams an end-to-end content and IA framework for helping developers create
          AI skills, validate quality, understand compliance requirements, and publish to a marketplace. It connected
          strategy, research, product workflows, partner needs, technical documentation, and prototype feedback into one
          ordered experience.
        </p>
        <p className="leading-relaxed opacity-80">
          The wireframe and prototype provided a concise way to review the proposed journey, the content foundation, and the
          iteration paths developers would need when testing, evaluating, connecting, or preparing a skill for review. Early
          user-testing results with industry developers are trending positive, while the team continues to refine the
          experience before launch.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
