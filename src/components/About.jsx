import { motion } from "framer-motion";
import { Briefcase, MapPin, Users, Zap } from "lucide-react";
import { profile } from "../data/content";

const traits = [
  ["Problem Solver", Zap],
  ["Team Player", Users],
  ["Quick Learner", Briefcase],
  ["Good Communicator", MapPin],
];

const card = (i) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true },
});

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <p className="eyebrow">About Me</p>
        <h2>Building with <span>purpose.</span></h2>
      </div>
      <div className="about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p>{profile.about}</p>
          <div className="meta">
            <span><MapPin size={14} /> {profile.location}</span>
            <span><Briefcase size={14} /> 4+ Years Experience</span>
            <span><Users size={14} /> Available for immediate joining</span>
          </div>
          <a className="btn ghost" href="/resume.pdf" download><Briefcase size={17} /> Download CV</a>
        </motion.div>
        <div className="traits">
          {traits.map(([title, Icon], i) => (
            <motion.div className="trait" key={title} {...card(i)}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>Focused on creating clean and effective solutions.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
