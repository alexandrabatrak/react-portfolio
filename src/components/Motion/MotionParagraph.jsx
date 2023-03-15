import { motion } from "framer-motion";

export default function MotionParagraph({ children, delay, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "50%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: delay ? delay : 0.5,
      }}
      {...props}>
      {children}
    </motion.div>
  );
}
