import aboutLizOutdoors from '../../imports/about-liz-outdoors.png';

export function About() {
  return (
    <section id="about" className="py-16 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[0.9fr_1fr_1fr] gap-10 md:gap-12 items-start">
          <div className="md:pt-1">
            <img
              src={aboutLizOutdoors}
              alt="Liz outdoors in a scenic landscape"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-sm"
            />
          </div>

          <div>
            <h2 className="mb-4 tracking-tight">Who I am</h2>
            <p className="leading-relaxed opacity-80">
              I'm a content designer who thinks in systems. I bring expertise in user-centered design,
              information architecture, and content strategy to create experiences that are clear, consistent,
              and accessible.
            </p>
            <p className="leading-relaxed opacity-80 mt-4">
              Based in Seattle, Washington. When I'm not designing, you'll find me camping, watching movies,
              volunteering at a cat shelter, or hosting barbecues.
            </p>
          </div>

          <div>
            <h2 className="mb-4 tracking-tight">What I do</h2>
            <p className="leading-relaxed opacity-80">
              I specialize in making complex information clear and usable through thoughtful content design,
              governance, and systems thinking. My work focuses on creating sustainable, scalable solutions
              that serve both users and organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
