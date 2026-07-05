import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Stats from "./components/Stats";
import BackToTop from "./components/BackToTop";
import Qualifications from "./components/Qualifications";
import SEO from "./components/SEO";

function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <Stats />
      <Skills />
      <Experience />
      <Qualifications />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollProgress />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <BackToTop />
      </Router>
    </ThemeProvider>
  );
}

export default App;
