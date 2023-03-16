import { useState } from "react";
import "./soundicon.scss";

export default function SoundIcon() {
  const [isPlaying, setIsPlaying] = useState(true);
  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const generateBars = () => {
    const bars = [];
    {
      for (let i = 0; i < 7; i++) {
        bars.push(<span className='bar' key={i}></span>);
      }
      return bars;
    }
  };

  return (
    <div className='sound-wrapper' tabIndex='0' onClick={toggleAnimation}>
      <div className={`sound-icon ${isPlaying ? "playing" : ""}`}>
        {generateBars()}
      </div>
    </div>
  );
}
