import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import { experience, certifications } from "../data/content";

const item = (i) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true },
});

const itemR = (i) => ({
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true },
});

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Experience & Certifications</p>
        <h2>My professional <span>journey.</span></h2>
      </motion.div>

      <div className="timeline-grid">
        <div>
          <motion.h3 className="timeline-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Briefcase size={20} /> Work Experience
          </motion.h3>
          {experience.map((e, i) => (
            <motion.div className="timeline-item" key={e.role} {...item(i)}>
              <b>{e.role}</b>
              <strong>{e.company} · {e.period}</strong>
              {e.location && <small style={{ display: "block", marginBottom: 6, color: "var(--muted)" }}>{e.location}</small>}
              <p>{e.text}</p>
            </motion.div>
          ))}
        </div>
        <div>
          <motion.h3 className="timeline-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Award size={20} /> Certifications
          </motion.h3>
          {certifications.map((c, i) => (
            <motion.div className="timeline-item" key={c.title} {...itemR(i)}>
              <b>{c.title}</b>
              <strong>{c.issuer} · {c.date}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
