const projects = [
  {
    title: "We Manage App",
    description:
      "This application is designed for small business owners, catering to both owners/managers and cashiers. It streamlines operations by providing robust tools for stock management and employee performance tracking.",
    href: "https://webmanage.pythonanywhere.com/",
    image: "/wemanage.png",
    alt: "Screenshot of We Manage App",
  },
  {
    title: "CIRS App",
    description:
      "The Community Infrastructure Reporting System (CIRS) facilitates seamless communication between residents and maintenance authorities, enabling faster, more transparent resolution of public service issues.",
    href: "https://kefiloe.pythonanywhere.com/",
    image: "/cirs.png",
    alt: "Screenshot of CIRS App",
  },
  {
    title: "YouthConnect App",
    description:
      "I am currently working on this app. Youth members can register an account, log in to a dashboard, and leave feedback on their experience.",
    href: "https://Moranodi.pythonanywhere.com/",
    image: "/youthConnect.png",
    alt: "Screenshot of YouthConnect App",
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold text-primary">
          My Projects
        </h2>

        <div className="mt-10 space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
                <div>
                  <h3 className="text-3xl font-semibold text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2c6ea4]"
                  >
                    View Project
                  </a>
                </div>
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-72 w-full rounded-3xl object-cover shadow-soft"
                />
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;
