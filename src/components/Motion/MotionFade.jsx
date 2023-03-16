import { motion } from "framer-motion";

export default function MotionFade({ children, delay, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: delay || 0.5,
      }}
      {...props}>
      {children}
    </motion.div>
  );
}
