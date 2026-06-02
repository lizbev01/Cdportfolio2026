import { Mail, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 tracking-tight">Let's connect</h2>
        <p className="mb-8 opacity-80 leading-relaxed max-w-2xl mx-auto">
          Interested in working together or learning more about my approach to content design?
          I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:bevan.a.elizabeth@gmail.com"
            className="flex items-center gap-3 px-6 py-3 border-2 border-teal-dark hover:bg-teal-dark hover:text-white transition-colors"
            style={{ borderColor: 'var(--teal-dark)' }}
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/lizbevan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
