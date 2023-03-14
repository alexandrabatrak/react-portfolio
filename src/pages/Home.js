import NoiseBg from "../extra-components/NoiseBg/NoiseBg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MainTitle from "../components/MainTitle/MainTitle";
import ScrollDown from "../extra-components/ScrollDown/ScrollDown";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NoiseBg width={window.innerWidth} height={window.innerHeight} />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className='home absolute-center'>
        <MainTitle />
        <Link
          to='projects'
          spy='true'
          smooth='true'
          duration={500}
          offset={-70}>
          <ScrollDown />
        </Link>
      </motion.section>
    </>
  );
}
