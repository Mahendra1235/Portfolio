import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="navbar"
      initial={{ x: "-50%", y: -80, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ boxShadow: scrolled ? "var(--shadow-lg)" : "var(--shadow)" }}
    >
      <a className="logo" href="#home">MK</a>
      <button className="mobile-menu" onClick={() => setOpen(!open)}>
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((x, i) => (
          <motion.a
            key={x}
            href={"#" + x.toLowerCase()}
            onClick={() => setOpen(false)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.04 }}
          >
            {x}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
}
