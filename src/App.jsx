import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import RoutesWrapper from "./routes/Routes";
import MotionFade from "./components/Motion/MotionFade";
import sound from "./sound/background.mp3";
import SoundPlayer from "./components/SoundPlayer/SoundPlayer";
import "./App.scss";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleButtonClick = () => {
    setLoading(false);
    setIsPlaying(true);
  };

  return (
    <>
      {loading ? (
        <div className='loader'>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}>
            <button onClick={handleButtonClick} style={{ zIndex: "1005" }}>
              Start
            </button>
          </div>
        </div>
      ) : (
        <>
          <Nav />
          <SoundPlayer url={sound} isPlaying={isPlaying} />
          <main>
            <RoutesWrapper />
          </main>
          <MotionFade delay={0.5}>
            <Footer />
          </MotionFade>
        </>
      )}
    </>
  );
}
