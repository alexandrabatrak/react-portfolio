import { motion } from "framer-motion";
import "./homesection.scss";

// TODO: Add parallax on scroll to the frame-img section

export default function HomeSection() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      exit={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.5 }}>
      <div className='grid'>
        <div className='home-frame'>
          <motion.p
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}>
            A design enthusiast with exceptional attention to detail, plenty of
            patience and a desire to create beautiful solutions.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
          className='face'>
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
            className='image'>
            <img src='./face.jpg' alt='' />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
