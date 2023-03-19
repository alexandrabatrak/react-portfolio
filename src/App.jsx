import { useState, useEffect, useRef, useLayoutEffect } from "react";
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
  const enterRef = useRef(null);

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
    setTimeout(() => {
      setLoading(false);
    }, 200);
    setIsPlaying(true);
  };

  const handleDOMContentLoaded = () => {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
      loader && loader.classList.add("hide");
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 1000);
  };

  // useEffect was not suitable. Issues were cause where loader was not removed because content loaded before and there was blah-blah I'm tired
  useLayoutEffect(() => {
    if (document.readyState === "complete") {
      handleDOMContentLoaded();
    } else {
      window.addEventListener("load", handleDOMContentLoaded);
      return () => {
        window.removeEventListener("load", handleDOMContentLoaded);
      };
    }
    console.log(`Hi! I see you diggin in the console 👀`);
  }, []);

  return (
    <>
      {audioLoaded &&
        (loading ? (
          <div
            ref={enterRef}
            className={`enter-wrapper ${loading ? "" : "hide"}`}>
            <div className='enter' onClick={handleButtonClick}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          <>
            <Nav />
            <SoundPlayer url={sound} isPlaying={isPlaying} />
            <main>
              <RoutesWrapper />
            </main>
            <MotionFade>
              <Footer />
            </MotionFade>
          </>
        ))}
    </>
  );
}
