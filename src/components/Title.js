import { useState, useEffect } from 'react';

export default function Title() {
  const [loopN, setLoopN] = useState(0);
  // amimate opacity of text
  const [textClass, setTextClass] = useState('fade-out');
  const toAnimate = ['create', 'develop', 'design'];
  const [text, setText] = useState('');
  const interval = 300;
  const [delta, setDelta] = useState(100 - Math.random() * 300);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopN % toAnimate.length;
    let fullText = toAnimate[i];
    let updatedText = fullText;

    if (text === '') {
      setTextClass('fade-out');
    } else if (textClass === 'fade-out') {
      setTextClass('fade-in');
    } else {
      setTextClass('fade-out');
      updatedText = '';
    }

    setText(updatedText);
    if (updatedText === '' && i === toAnimate.length - 1) {
      setLoopN(0);
    } else if (updatedText === '') {
      setLoopN(loopN + 1);
    }
  };

  return (
    <div className='masthead'>
      <h1 className='display-1 text-white fst-italic'>
        {`I `}
        <span className={textClass}>{text}</span>
      </h1>
      <p className='text-white-50 w-50 fst-italic'>
        A design enthusiast with exceptional attention to detail, plenty of
        patience and a desire to create beautiful solutions.
      </p>
    </div>
  );
}
