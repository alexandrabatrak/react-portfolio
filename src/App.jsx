import { useState, useEffect } from "react";
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
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(!loading);

  // Load the audio
  useEffect(() => {
    new Promise((resolve, reject) => {
      const audio = new Audio(sound);
      audio.oncanplaythrough = resolve;
      audio.onerror = reject;
      audio.load();
    })
      .then(() => {
        setAudioLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleButtonClick = () => {
    setLoading(false);
    setIsPlaying(true);
  };

  const handleDOMContentLoaded = () => {
    document.querySelector(".loader").remove();
  };

  useEffect(() => {
    window.addEventListener("load", handleDOMContentLoaded);
    return () => {
      window.removeEventListener("load", handleDOMContentLoaded);
    };
  }, []);

  return (
    <>
      {audioLoaded &&
        (loading ? (
          <div className='enter'>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}>
              <button onClick={handleButtonClick} style={{ zIndex: "1005" }}>
                Enter
              </button>
            </div>
          </div>
        ) : (
          <>
            <Nav />
            <SoundPlayer url={sound} isPlaying={isPlaying} />
            <main>
              <RoutesWrapper setIsLoaded={setIsLoaded} />
            </main>
            <MotionFade delay={0.5}>
              <Footer />
            </MotionFade>
          </>
        ))}
    </>
  );
}
