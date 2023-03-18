import { useState, useEffect, useMemo } from "react";

const useAudio = ({ url, isPlaying }) => {
  const audio = useMemo(() => new Audio(url), []);
  const [playing, setPlaying] = useState(false);
  playing = isPlaying;

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      audio.loop = true;
      audio.play();
    } else {
      audio.loop = false;
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default useAudio;
