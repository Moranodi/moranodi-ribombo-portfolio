import moranodiImg from "../assets/moranodi.jpg";

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pt-20">
      <div className="grid items-center gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
        <div className="flex flex-col items-center rounded-3xl bg-white p-6 text-center shadow-soft sm:p-8">
          <img
            src={moranodiImg}
            alt="Moranodi Ribombo"
            className="h-40 w-40 rounded-full border-8 border-primary object-cover shadow-lg sm:h-48 sm:w-48"
          />
          <h1 className="mt-6 text-2xl font-bold text-slate-950 sm:text-[1.7rem]">
            Moranodi Mduduzi Ribombo
          </h1>
          <p className="font-medium text-primary">Software Developer</p>
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Building <span className="text-primary">Scalable</span> Digital
            Solutions.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            Computer Science undergraduate with hands-on experience in
            full-stack development. Passionate about creating reliable backend
            systems and intuitive web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-slate-700 lg:justify-start">
            <span className="rounded-full bg-slate-100 px-4 py-2">
              Computer Science Undergraduate
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2">
              Software Engineering
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2">
              Fullstack Development
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2">
              Backend Systems
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2">
              Problem Solving
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex w-full justify-center rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-white transition hover:bg-primary/90 sm:w-auto"
            >
              View My Work
            </a>
            <a
              href="/Moranodi Ribombo CV2026.pdf"
              download
              className="inline-flex w-full justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold transition hover:bg-slate-50 sm:w-auto"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
