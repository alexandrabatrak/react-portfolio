import { motion } from "framer-motion";
import "./pagetitle.scss";

export default function PageTitle({ title }) {
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
      className='heading-wrapper'>
      <h2>
        {title.split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ perspective: 800, rotateX: 0 }}
            whileHover={{
              scaleY: rand(1.1, 1.3),
              scaleX: rand(1.4, 1.7),
              scaleZ: rand(1.1, 1.4),
              perspective: 500,
              rotateX: rand(-10, 10),
              transition: { ease: "easeInOut", duration: 0.5 },
            }}>
            {letter}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  );
}
