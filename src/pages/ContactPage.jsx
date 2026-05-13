import { useState } from "react";

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(
      "Thanks for reaching out! This form is currently static in the demo.",
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-4xl font-semibold text-primary">Get in Touch</h2>
          <p className="mt-4 text-slate-600">
            I&#39;d love to hear from you. Fill out the form below or connect
            via one of the links.
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-slate-700"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formState.subject}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formState.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2c6ea4]"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-semibold text-primary">
            <a
              href="mailto:morokzar@gmail.com"
              className="rounded-2xl bg-slate-100 px-4 py-3 transition hover:bg-slate-200"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/moranodi"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-slate-100 px-4 py-3 transition hover:bg-slate-200"
            >
              💻 GitHub
            </a>
            <a
              href="https://linkedin.com/in/moranodi-ribombo-8b5905370"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-slate-100 px-4 py-3 transition hover:bg-slate-200"
            >
              🔗 LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
