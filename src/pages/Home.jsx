import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeSection from "../components/HomeSection/HomeSection";
import NoiseBg from "../components/NoiseBg/NoiseBg";
import MotionPage from "../components/Motion/MotionPage";
import MainTitle from "../components/MainTitle/MainTitle";
import ScrollDown from "../components/ScrollDown/ScrollDown";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setIsLoading(false);
  }, []);
  return (
    <>
      {!isLoading && (
        <NoiseBg width={window.innerWidth} height={window.innerHeight} />
      )}
      <MotionPage id='home' className='home'>
        <div className='absolute-center fullheight'>
          <MainTitle />
          <Link
            to='projects'
            spy='true'
            smooth='true'
            duration={500}
            offset={-70}>
            <ScrollDown />
          </Link>
        </div>
        <div className='absolute-center halfheight'>
          <HomeSection />
        </div>
      </MotionPage>
    </>
  );
}
