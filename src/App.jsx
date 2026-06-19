import "./styles/globals.css";
import { profile, stats, skillCategories, experience, projects } from "./data/portfolio";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import Skills     from "./components/Skills";
import Experience from "./components/Experience";
import Projects   from "./components/Projects";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar name={profile.name} />
      <main>
        <Hero       profile={profile} stats={stats} />
        <Skills     skillCategories={skillCategories} />
        <Experience experience={experience} />
        <Projects   projects={projects} />
        <Contact    profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
