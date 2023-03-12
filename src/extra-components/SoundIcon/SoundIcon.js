import { useState, useEffect } from 'react';
import './style.scss';

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

  useEffect(() => {
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    if (main && main.querySelector('section.home')) {
      header.classList.add('home');
    } else {
      header.classList.remove('home');
    }
  }, []);

  return (
    <div className='sound-wrapper' onClick={toggleAnimation}>
      <div className={`sound-icon ${isPlaying ? 'playing' : ''}`}>
        {generateBars()}
      </div>
    </div>
  );
}
