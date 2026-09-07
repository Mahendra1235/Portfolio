import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } },
});

const heroCdnUrl = (w) => `/.netlify/images?url=/hero.png&w=${w}&fm=avif&q=80`;

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-bg">
        <img
          src={heroCdnUrl(1200)}
          srcSet={`${heroCdnUrl(400)} 400w, ${heroCdnUrl(800)} 800w, ${heroCdnUrl(1200)} 1200w`}
          sizes="100vw"
          width={1934}
          height={813}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-copy">
        <motion.p className="eyebrow" {...fade(0)}>Hello, I'm</motion.p>
        <motion.h1 {...fade(0.1)}>
          {profile.name.split(" ")[0]} <span>{profile.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>
        <motion.h2 {...fade(0.2)}>{profile.role}</motion.h2>
        <motion.p className="hero-text" {...fade(0.3)}>{profile.summary}</motion.p>
        <motion.div className="hero-actions" {...fade(0.4)}>
          <a className="btn primary" href="#projects">View My Portfolio</a>
          <a className="btn ghost" href="/resume.pdf" download><Download size={17} /> Download CV</a>
        </motion.div>
        <motion.div className="socials" {...fade(0.5)}>
          <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={18} /></a>
        </motion.div>
      </div>

      <motion.a
        className="scroll-hint"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}