import { useState } from "react";
import { Link } from "react-router-dom";
import awardWebsiteImg from "../assets/Best Website Application.jpeg";
import awardSystemImg from "../assets/Best Overall System.jpeg";
import backendDevImg from "../assets/Backend Dev.jpeg";
import achievementsImg from "../assets/Me holding archievemnets.jpeg";
import proofImage2 from "../assets/2.jpeg";
import proofImage3 from "../assets/3.jpeg";
import proofImage4 from "../assets/4.jpeg";

const proofImages = [
  {
    title: "Best Website Application 2025",
    src: awardWebsiteImg,
    caption: "Award certificate from ICEP for Best Website Application.",
  },
  {
    title: "Best Overall System 2025",
    src: awardSystemImg,
    caption: "Award certificate from ICEP for Best Overall System.",
  },
  {
    title: "Backend Developer role",
    src: backendDevImg,
    caption: "Recognition of backend contributions during the internship.",
  },
  {
    title: "Team achievements",
    src: achievementsImg,
    caption: "Team celebration photo with the achievement certificates.",
  },
  {
    title: "Project photo 1",
    src: proofImage2,
    caption: "Additional internship project proof image.",
  },
  {
    title: "Project photo 2",
    src: proofImage3,
    caption: "Additional internship project proof image.",
  },
  {
    title: "Project photo 3",
    src: proofImage4,
    caption: "Additional internship project proof image.",
  },
];

function AchievementsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
          <div className="space-y-8">
            <div className="space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                Professional Internship
              </p>
              <h1 className="text-4xl font-semibold text-slate-950">
                Achievements
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600">
                During my internship at ICEP (LiquiTech Group), I contributed as
                a Backend Developer and later became a Full Stack team member.
                The team won top awards for our production system and website
                during 2025.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl bg-slate-100 p-6">
                <h2 className="text-2xl font-semibold text-primary">
                  Internship Experience
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  ICEP (LiquiTech Group) | South Africa
                </p>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  Software Developer / Team Member | October 2025 – March 2026
                </p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>
                    • Collaborated within a development group to design and
                    implement high-quality software solutions.
                  </li>
                  <li>• Awarded Best Website Application for the year 2025.</li>
                  <li>• Awarded Best Overall System for the year 2025.</li>
                  <li>
                    • Started as Backend Developer and moved to Full Stack at a
                    later stage.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-slate-100 p-6">
                <h2 className="text-2xl font-semibold text-primary">
                  Proof & Gallery
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {proofImages.map((image) => (
                    <button
                      key={image.title}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="group rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-primary hover:shadow-md"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="h-48 w-full rounded-3xl object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <p className="mt-4 font-semibold text-slate-900">
                        {image.title}
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        {image.caption}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-center">
              <Link
                to="/"
                className="inline-flex rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2c6ea4]"
              >
                Back to Home
              </Link>
              <Link
                to="/projects"
                className="inline-flex rounded-2xl border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-200"
              >
                See Projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 shadow-sm transition hover:bg-slate-200"
              aria-label="Close image preview"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[70vh] w-full object-contain bg-slate-900"
            />
            <div className="space-y-3 p-6">
              <h3 className="text-2xl font-semibold text-slate-950">
                {selectedImage.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AchievementsPage;
