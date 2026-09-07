import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { profile } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="section contact">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Get In Touch</p>
        <h2>Let's build something <span>great.</span></h2>
        <p>Have a project in mind or want to say hello? Feel free to reach out.</p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href={`mailto:${profile.email}`}><Mail size={18} /> <span>{profile.email}</span></a>
          <a href={`tel:${profile.phone}`}><Phone size={18} /> <span>{profile.phone}</span></a>
          <div><MapPin size={18} /> <span>{profile.location}</span></div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="form-row">
            <input required placeholder="Your name" />
            <input required type="email" placeholder="Your email" />
          </div>
          <textarea required rows="5" placeholder="Your message..." />
          <button className="btn primary" type="submit" disabled={sent}>
            {sent ? <><CheckCircle size={17} /> Message Sent!</> : <><Send size={17} /> Send Message</>}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
