import { motion } from "framer-motion";

export default function MotionParagraph({ children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "50%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        staggerChildren: 0.5,
      }}
      {...props}>
      {children}
    </motion.div>
  );
}
