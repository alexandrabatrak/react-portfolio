import { useState, useEffect, useCallback } from 'react';
import './style.scss';

export default function Title() {
  const wordsArr = ['design', 'develop', 'create'];
  const [words, setWords] = useState(wordsArr);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const indexDelay = 5000;
  const showDelay = 1000;
  const fadeOutDelay = 300;

  const setWordsCallback = useCallback((newWords) => {
    setWords(newWords);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    setWordsCallback(wordsArr);
  }, [setWordsCallback]);

  useEffect(() => {
    const isLastWord = currentIndex === words.length - 1;
    let timeout;
    let showTimeout;

    if (!isLastWord) {
      showTimeout = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setShowWord(false);
        }, fadeOutDelay);
      }, indexDelay - showDelay);
    }

    timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        isLastWord || prevIndex === words.length - 1 ? prevIndex : prevIndex + 1
      );
      setShowWord(true);
      setFadeOut(false);
    }, indexDelay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(showTimeout);
    };
  }, [currentIndex, words]);

  return (
    <div className='masthead d-flex flex-column justify-content-center align-items center'>
      <h1 className='display-1 text-white fst-italic'>
        {`I `}
        <span className={`show ${fadeOut ? 'fade-out' : ''}`}>
          {showWord && words[currentIndex]}
        </span>
      </h1>
      <p className='text-white-50 w-50 fst-italic'>
        A design enthusiast with exceptional attention to detail, plenty of
        patience and a desire to create beautiful solutions.
      </p>
    </div>
  );
}
