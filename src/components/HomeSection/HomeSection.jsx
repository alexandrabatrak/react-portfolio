import { motion, useScroll, useTransform } from "framer-motion";
import "./homesection.scss";

export default function HomeSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50], { clamp: false });
  const y2 = useTransform(scrollYProgress, [0, 1], [-10, 10], { clamp: false });
  const x = useTransform(scrollYProgress, [0, 1], [-25, 25], { clamp: false });
  const x2 = useTransform(scrollYProgress, [0, 1], [-50, 50], { clamp: false });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.5 }}>
      <div className='home-grid'>
        <motion.div style={{ y, x2 }} className='home-frame'>
          <motion.p
            style={{ y2, x }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}>
            A design enthusiast with exceptional attention to detail, plenty of
            patience and a desire to create beautiful solutions.
          </motion.p>
        </motion.div>
        <motion.div style={{ y, x }} className='face'>
          <motion.div className='image'>
            <img src='./face.jpg' alt='' />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
