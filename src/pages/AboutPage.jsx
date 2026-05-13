function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-4xl font-semibold text-primary">About Me</h2>
          <div className="mt-8 space-y-6 text-slate-700">
            <p>
              Hello! I'm Moranodi Mduduzi Ribombo, a passionate Computer Science
              undergraduate with a strong foundation in software development. My
              journey in tech has equipped me with hands-on experience in
              building robust web applications and efficient backend systems.
            </p>
            <p>
              I thrive on the challenge of creating scalable and reliable
              solutions that solve real-world problems. My curiosity drives me
              to constantly learn and adapt to new technologies, ensuring I stay
              at the forefront of modern software development practices.
            </p>
            <p>
              Beyond coding, I am a firm believer in the power of teamwork and
              effective communication. I enjoy collaborating with others,
              sharing ideas, and working together to achieve common goals. My
              problem-solving skills allow me to tackle complex issues
              creatively and efficiently.
            </p>
            <p>
              In my free time, I listen to music (HipHop), watch series, and
              read books like "8 Secrets of the Truly Rich." I also enjoy
              staying active and playing sports, which helps me keep a healthy
              and balanced lifestyle.
            </p>
          </div>

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
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
