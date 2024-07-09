import About from "./Components/About";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

export default function Home() {
  return (
    <div>
      <div id="home-section">
        <Hero />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
    </div>
  );
}
