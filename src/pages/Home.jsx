import { useEffect } from "react";
import { Link } from "react-router-dom";
import NoiseBg from "../extra-components/NoiseBg/NoiseBg";
import MotionPage from "../components/Motion/MotionPage";
import MainTitle from "../components/MainTitle/MainTitle";
import ScrollDown from "../extra-components/ScrollDown/ScrollDown";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NoiseBg width={window.innerWidth} height={window.innerHeight} />
      <MotionPage className='home absolute-center'>
        <MainTitle />
        <Link
          to='projects'
          spy='true'
          smooth='true'
          duration={500}
          offset={-70}>
          <ScrollDown />
        </Link>
      </MotionPage>
    </>
  );
}
