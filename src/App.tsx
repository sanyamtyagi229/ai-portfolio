import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Exploring from "./components/Exploring";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-ivory antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Exploring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
