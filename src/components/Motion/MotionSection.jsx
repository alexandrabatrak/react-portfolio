import { motion } from 'framer-motion';

export default function MotionSection({ children, ...props }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: '50%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      {...props}>
      {children}
    </motion.section>
  );
}
