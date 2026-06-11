import { ImageWithFallback } from './figma/ImageWithFallback';
import appCreationImage from '../../imports/Screenshot_2026-05-28_at_5.19.10_pm.png';
import aiDeveloperCenterImage from '../../imports/ai-dev-center-link.png';
import claimsImage from '../../imports/insurance-claims-app.jpg';
import iaTemplatesSystemsImage from '../../imports/ia-templates-systems.jpeg';

interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  image: string;
  hasCaseStudy?: boolean;
  imageContainerClassName?: string;
  imageClassName?: string;
}

const projects: Project[] = [
  {
    id: 'app-creation',
    title: 'App creation and compliance for developers',
    company: 'Meta',
    description: 'Full end-to-end content design for the developer experience on developers.facebook.com, from app creation and technical documentation through App Review and compliance',
    image: appCreationImage,
    hasCaseStudy: true
  },
  {
    id: 'ai-developer-center',
    title: 'Building an AI developer center',
    company: 'Meta',
    description: 'Aligning terminology, navigation, information architecture, and technical documentation for a scalable AI developer experience',
    image: aiDeveloperCenterImage,
    hasCaseStudy: true
  },
  {
    id: 'taxonomy',
    title: 'IA, templates and systems',
    company: 'Meta & Sun Life Financial',
    description: 'Building scalable content systems, style guides, and taxonomies for enterprise products',
    image: iaTemplatesSystemsImage,
    hasCaseStudy: true
  },
  {
    id: 'claims',
    title: 'Making insurance claims easier',
    company: 'Sun Life Financial',
    description: 'Simplifying the insurance claims process through user-centered content design',
    image: claimsImage,
    hasCaseStudy: true,
    imageContainerClassName: 'bg-white',
    imageClassName: 'object-contain p-3 group-hover:scale-105'
  }
];

interface PortfolioProps {
  onProjectClick?: (projectId: string) => void;
}

export function Portfolio({ onProjectClick }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-16 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 tracking-tight">Some of my work</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white border border-neutral-200 overflow-hidden transition-all group ${
                project.hasCaseStudy ? 'cursor-pointer hover:border-teal-dark hover:shadow-lg' : ''
              }`}
              onClick={() => project.hasCaseStudy && onProjectClick?.(project.id)}
              style={project.hasCaseStudy ? { borderColor: 'var(--border)' } : undefined}
              onMouseEnter={(e) => {
                if (project.hasCaseStudy) {
                  e.currentTarget.style.borderColor = 'var(--teal-dark)';
                }
              }}
              onMouseLeave={(e) => {
                if (project.hasCaseStudy) {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }
              }}
            >
              <div className={`aspect-video overflow-hidden ${project.imageContainerClassName ?? ''}`}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-300 ${
                    project.imageClassName ?? 'object-cover group-hover:scale-105'
                  }`}
                />
              </div>
              <div className="p-6">
                <p className="tracking-wider mb-2 opacity-60">{project.company}</p>
                <h3 className="mb-3 tracking-tight">{project.title}</h3>
                <p className="opacity-70 leading-relaxed">{project.description}</p>
                {project.hasCaseStudy && (
                  <p className="mt-4 opacity-60 hover:opacity-100 transition-opacity" style={{ color: 'var(--teal-dark)' }}>
                    View case study →
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
