import { ImageWithFallback } from './ImageWithFallback';

interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  image: string;
  hasCaseStudy?: boolean;
}

const projects: Project[] = [
  {
    id: 'app-creation',
    title: 'App creation for developers',
    company: 'Meta',
    description: 'Designing the content and information architecture for developer tools and app creation workflows',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    hasCaseStudy: true
  },
  {
    id: 'taxonomy',
    title: 'Taxonomy, templates & systems',
    company: 'Meta & Sun Life Financial',
    description: 'Building scalable content systems, style guides, and taxonomies for enterprise products',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    hasCaseStudy: true
  },
  {
    id: 'policy',
    title: 'Designing compliance',
    company: 'Meta',
    description: 'Overhauling App Review process with transparent workflows and clear content structure while maintaining legal guardrails',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    hasCaseStudy: true
  },
  {
    id: 'claims',
    title: 'Making insurance claims easier',
    company: 'Sun Life Financial',
    description: 'Simplifying the insurance claims process through user-centered content design',
    image: 'https://cdn.freebiesupply.com/logos/large/2x/sun-life-financial-1-logo-png-transparent.png',
    hasCaseStudy: true
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
            >
              <div className="aspect-video overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="tracking-wider mb-2 opacity-60 text-sm">{project.company}</p>
                <h3 className="mb-3 tracking-tight">{project.title}</h3>
                <p className="opacity-70 leading-relaxed text-sm">{project.description}</p>
                {project.hasCaseStudy && (
                  <p className="mt-4 opacity-60 hover:opacity-100 transition-opacity text-sm" style={{ color: 'var(--teal-dark)' }}>
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
