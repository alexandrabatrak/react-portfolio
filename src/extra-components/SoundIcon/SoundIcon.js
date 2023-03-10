import './style.scss';

export default function SoundIcon() {
  const soundToggle = () => {
    const icon = document.querySelector('.sound-icon');
    const running = icon.style.animationPlayState === 'running';
    icon.addEventListener('click', () => {
      icon.style.animationPlayState = running ? 'paused' : 'running';
    });
  };

  return (
    <div className='position-absolute end-0 bottom-0 z-3' onClick={soundToggle}>
      <div className='sound-icon'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    </div>
  );
}
