import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/AboutPage.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/AchievementsPage.jsx";
import Contact from "./components/ContactPage.jsx";

function App() {
  return (
    <div className="bg-slate-50 selection:bg-primary/30">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="projects" className="py-20 bg-white">
          <Projects />
        </section>
        <section id="achievements" className="py-20">
          <Achievements />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>
      <footer className="py-10 text-center text-slate-500 border-t border-slate-200">
        <p>© 2026 Moranodi Ribombo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
