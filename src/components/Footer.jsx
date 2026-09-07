import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      © {new Date().getFullYear()} Mahendra Kumar. All rights reserved.
    </motion.footer>
  );
}
