import moranodiImg from "../assets/moranodi.jpg";
function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <section className="rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <img
                id="my-photo"
                src={moranodiImg}
                alt="Moranodi Ribombo"
                className="h-44 w-44 rounded-full border-8 border-primary object-cover shadow-[0_0_15px_rgba(0,0,0,0.15)]"
              />
              <h1 className="mt-6 text-3xl font-semibold text-slate-950">
                Moranodi Mduduzi Ribombo
              </h1>
            </div>
          </section>

          <section className="rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
            <div className="space-y-6 text-center md:text-left">
              <div>
                <h2 className="text-3xl font-semibold text-primary">
                  Career Objective
                </h2>
                <p className="mt-2 text-lg font-medium text-slate-600">
                  Software Engineer | Fullstack Developer | Data Analyst
                </p>
              </div>
              <p className="text-base leading-7 text-slate-600">
                A Computer Science undergraduate with hands-on experience in
                building web applications and backend systems. I'm passionate
                about creating scalable, reliable solutions and continuously
                growing my skills in modern software development.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/projects"
                  className="inline-flex rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2c6ea4]"
                >
                  View my Work
                </a>
                <a
                  href="/achievements"
                  className="inline-flex rounded-2xl border border-primary bg-slate-100 px-6 py-3 text-sm font-semibold text-primary transition hover:border-slate-300 hover:bg-white"
                >
                  View Achievements
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Moranodi-Ribombo-CV2026.pdf`}
                  download="Moranodi-Ribombo-CV2026.pdf"
                  className="inline-flex rounded-2xl border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-200"
                >
                  Download CV
                </a>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-3xl font-semibold text-primary">Skills</h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-700 md:justify-start">
            <li className="rounded-full bg-slate-100 px-4 py-2 transition hover:bg-secondary hover:text-white">
              Languages: Python, Java, JavaScript, SQL
            </li>
            <li className="rounded-full bg-slate-100 px-4 py-2 transition hover:bg-secondary hover:text-white">
              Web: HTML, CSS, Flask, JEE (JSP/Servlets)
            </li>
            <li className="rounded-full bg-slate-100 px-4 py-2 transition hover:bg-secondary hover:text-white">
              Databases: MySQL, SQLite
            </li>
            <li className="rounded-full bg-slate-100 px-4 py-2 transition hover:bg-secondary hover:text-white">
              Tools: Git, GitHub, NetBeans, Android Studio
            </li>
            <li className="rounded-full bg-slate-100 px-4 py-2 transition hover:bg-secondary hover:text-white">
              Soft Skills: Teamwork, Problem-solving, Communication
            </li>
          </ul>
        </section>

        <section
          id="contact"
          className="mt-10 rounded-3xl bg-card p-8 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1"
        >
          <h2 className="text-3xl font-semibold text-primary">Get in Touch</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Let’s connect on any of these platforms:
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold text-primary">
            <a
              href="mailto:morokzar@gmail.com"
              className="rounded-2xl px-4 py-3 transition hover:bg-slate-100"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/moranodi"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-4 py-3 transition hover:bg-slate-100"
            >
              💻 GitHub
            </a>
            <a
              href="https://linkedin.com/in/moranodi-ribombo-8b5905370"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-4 py-3 transition hover:bg-slate-100"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://twitter.com/moranodi_r"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-4 py-3 transition hover:bg-slate-100"
            >
              🐦 Twitter
            </a>
            <a
              href="tel:+27671361318"
              className="rounded-2xl px-4 py-3 transition hover:bg-slate-100"
            >
              📱 Call Me
            </a>
            <a
              href="https://wa.me/+27671361318"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-4 py-3 transition hover:bg-slate-100"
            >
              💬 Whatsapp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
