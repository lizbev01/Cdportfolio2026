import { FileText, Layout, MessageSquare, Settings, Target, BarChart } from 'lucide-react';

const skills = [
  {
    icon: FileText,
    title: 'Content Systems & Taxonomy',
    description: 'Creating style guides and glossaries for consistency across products and teams'
  },
  {
    icon: Layout,
    title: 'Information Architecture',
    description: 'Organizing complex information so users can navigate and find what they need'
  },
  {
    icon: MessageSquare,
    title: 'UI Copy',
    description: 'Writing clear interface text that guides users through complex tasks'
  },
  {
    icon: Settings,
    title: 'Governance',
    description: 'Establishing team agreements and scalable best practices'
  },
  {
    icon: Target,
    title: 'Action-First Content',
    description: 'Structuring content around what users need to accomplish'
  },
  {
    icon: BarChart,
    title: 'Data-Driven Design',
    description: 'Making content decisions based on metrics and user behavior'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 tracking-tight">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="p-5 border border-neutral-200 hover:border-teal-accent transition-colors">
                <Icon className="mb-3 opacity-60" size={28} style={{ color: 'var(--teal-dark)' }} />
                <h3 className="mb-2 tracking-tight">{skill.title}</h3>
                <p className="opacity-70 leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
