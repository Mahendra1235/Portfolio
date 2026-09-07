import { useEffect, useState } from "react";
import { ArrowUp, Moon, Sun } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App() {
  const [dark, setDark] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; }, [dark]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return <>
    <Navbar />
    <button className="theme-toggle" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
    <button className={`scroll-top ${showTop ? "show" : ""}`} aria-label="Scroll to top" onClick={goTop}>
      <ArrowUp size={18} />
    </button>
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>;
}