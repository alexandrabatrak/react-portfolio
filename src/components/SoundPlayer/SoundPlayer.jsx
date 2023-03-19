import { useState, useEffect, useMemo, useCallback } from "react";
import "./soundplayer.scss";

const useAudio = ({ url, isPlaying: initialPlaying }) => {
  const audio = useMemo(() => new Audio(url), []);
  const [playing, setPlaying] = useState(initialPlaying);

  const toggle = useCallback(() => {
    setPlaying((prevPlaying) => {
      const newPlaying = !prevPlaying;
      if (newPlaying) {
        audio.loop = true;
        audio.play();
      } else {
        audio.loop = false;
        audio.pause();
      }
      return newPlaying;
    });
  }, [audio]);

  useEffect(() => {
    if (initialPlaying) {
      audio.loop = true;
      audio.play();
    } else {
      audio.loop = false;
      audio.pause();
    }
  }, [audio, initialPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("soundPreference", JSON.stringify(playing));
  }, [playing]);

  return [playing, toggle];
};

export default function SoundPlayer({ url, isPlaying }) {
  const [storedState, setStoredState] = useState(
    localStorage.getItem("soundPreference") !== null
      ? JSON.parse(localStorage.getItem("soundPreference"))
      : isPlaying
  );

  const [playing, toggle] = useAudio({ url, isPlaying: storedState });

  const generateBars = () => {
    const bars = [];
    for (let i = 0; i < 7; i++) {
      bars.push(<span className='bar' key={i}></span>);
    }
    return bars;
  };

  useEffect(() => {
    setStoredState(playing);
  }, [playing]);

  return (
    <div className='sound-wrapper' tabIndex='0' onClick={toggle}>
      <div className={`sound-icon ${playing ? "playing" : ""}`}>
        {generateBars()}
      </div>
    </div>
  );
}
