import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/content";

const card = (i) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true },
});

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const types = ["All", "Full Stack", "Frontend", "Backend"];
  const shown = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">My Projects</p>
        <h2>Things I've <span>built.</span></h2>
        <p>Selected projects showcasing my engineering and product skills.</p>
      </motion.div>

      <motion.div
        className="filters"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {types.map((t) => (
          <button className={filter === t ? "active" : ""} onClick={() => setFilter(t)} key={t}>
            {t}
          </button>
        ))}
      </motion.div>

      <div className="projects-grid">
        {shown.map((p, i) => (
          <motion.article className="project-card" key={p.title} {...card(i)}>
            <div className="project-image">
              <span>{`0${i + 1}`}</span>
              <div className="project-window" />
            </div>
            <div className="project-body">
              <small>{p.type}</small>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub</a>
                )}
                {p.demo && p.demo !== "#" && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink size={15} /></a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
