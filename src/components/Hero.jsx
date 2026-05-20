import moranodiImg from "../assets/moranodi.jpg";

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] items-center">
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-soft">
          <img
            src={moranodiImg}
            alt="Moranodi Ribombo"
            className="h-48 w-48 rounded-full border-8 border-primary object-cover shadow-lg"
          />
          <h1 className="mt-6 text-2xl font-bold text-slate-950">
            Moranodi Mduduzi Ribombo
          </h1>
          <p className="text-primary font-medium">Software Developer</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-slate-950 leading-tight">
            Building <span className="text-primary">Scalable</span> Digital
            Solutions.
          </h2>
          <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
            Computer Science undergraduate with hands-on experience in
            full-stack development. Passionate about creating reliable backend
            systems and intuitive web applications.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-medium text-slate-700">
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
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition"
            >
              View My Work
            </a>
            <a
              href="/Moranodi Ribombo CV2026.pdf"
              download
              className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold hover:bg-slate-50 transition"
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
