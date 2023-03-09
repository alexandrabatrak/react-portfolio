import { motion } from 'framer-motion';

export default function Project({ id, title, deployment, repo, img }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className='d-flex flex-column'>
      {/* https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles */}
      <motion.div className='project-image'>
        <div className='bg-image' style={{ backgroundImage: `url(${img})` }} />
      </motion.div>
      <motion.h3>{title}</motion.h3>
      <motion.a href='{repo}'>Repo</motion.a>
      <motion.a href='{deployment}'>Deployment</motion.a>
    </motion.div>
  );
}
