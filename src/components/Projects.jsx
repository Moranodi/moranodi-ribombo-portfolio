const projects = [
  {
    title: "We Manage App",
    description:
      "Streamlines operations for small business owners with stock management and performance tracking.",
    href: "https://webmanage.pythonanywhere.com/",
    tags: ["Python", "Flask", "Stock Management"],
  },
  {
    title: "CIRS App",
    description:
      "Infrastructure reporting system for seamless communication between residents and authorities.",
    href: "https://kefiloe.pythonanywhere.com/",
    tags: ["Web", "Reporting", "Community"],
  },
  {
    title: "YouthConnect App",
    description:
      "In-development dashboard for youth members to register and provide experience feedback.",
    href: "https://Moranodi.pythonanywhere.com/",
    tags: ["React", "Dashboard", "In-Progress"],
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-slate-950 mb-12">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:shadow-xl hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-slate-900">
              {project.title}
            </h3>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase font-bold tracking-wider bg-slate-100 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-primary font-bold text-sm hover:underline"
            >
              Visit Live Site →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
