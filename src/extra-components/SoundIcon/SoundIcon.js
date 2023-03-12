import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import './style.scss';

export default function SoundIcon() {
  const [isPlaying, setIsPlaying] = useState(true);
  // const location = useLocation();
  // const isHome = location.pathname === '/';
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
    <div
      // className={`sound-wrapper ${isHome ? 'home' : ''}`}
      className='sound-wrapper'
      onClick={toggleAnimation}>
      <div className={`sound-icon ${isPlaying ? 'playing' : ''}`}>
        {generateBars()}
      </div>
    </div>
  );
}
