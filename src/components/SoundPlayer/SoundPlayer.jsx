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
    setPlaying(initialPlaying);
  }, [initialPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default function SoundPlayer({ url, isPlaying }) {
  const [playing, toggle] = useAudio({ url, isPlaying });

  const generateBars = () => {
    const bars = [];
    for (let i = 0; i < 7; i++) {
      bars.push(<span className='bar' key={i}></span>);
    }
    return bars;
  };

  return (
    <div className='sound-wrapper' tabIndex='0' onClick={toggle}>
      <div className={`sound-icon ${playing ? "playing" : ""}`}>
        {generateBars()}
      </div>
    </div>
  );
}

// const toggle = () => setPlaying(!isPlaying);

// useEffect(() => {
//   setPlaying((prevPlaying) => {
//     if (prevPlaying !== isPlaying) {
//       return isPlaying;
//     }
//     return prevPlaying;
//   });
// }, [isPlaying]);

// useEffect(() => {
//   if (playing) {
//     audio.loop = true;
//     audio.play();
//   } else {
//     audio.loop = false;
//     audio.pause();
//   }
// }, [playing]);
