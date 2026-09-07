import { motion } from "framer-motion";
import { Brain, Code2, Database, Globe, Server, Settings, Wrench } from "lucide-react";
import { skills } from "../data/content";

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  "AI-Assisted Dev": Brain,
  "State Management": Settings,
  "Tools & DevOps": Wrench,
  "Monitoring & Observability": Globe,
  "Languages & Methodologies": Globe,
};

const card = (i) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true },
});

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Skills & Services</p>
        <h2>My technical <span>toolkit.</span></h2>
      </motion.div>

      <div className="skills-grid">
        {Object.entries(skills).map(([name, list], i) => {
          const Icon = icons[name] || Code2;
          return (
            <motion.div className="skill-card" key={name} {...card(i)}>
              <Icon size={24} />
              <h3>{name}</h3>
              <div className="skill-list">
                {list.map((x) => <span key={x}>{x}</span>)}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="services">
        {[
          ["Web Application Development", "Custom, responsive solutions built with React.js, Node.js and modern frameworks."],
          ["API Development & Integration", "Scalable REST APIs with authentication, CRUD operations, and third-party integrations."],
          ["SRE & Observability", "Production monitoring, incident management, and real-time dashboards using AppDynamics and Grafana."],
        ].map(([title, desc], i) => (
          <motion.div key={title} {...card(i + 2)}>
            <p className="eyebrow">What I Do</p>
            <h3>{title}</h3>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
