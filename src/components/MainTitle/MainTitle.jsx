import { useState, useEffect, useCallback } from "react";
import "./maintitle.scss";

export default function MainTitle() {
  const wordsArr = ["I Design", "I Build", "I Create"];
  const [words, setWords] = useState(wordsArr);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const indexDelay = 4000;
  const showDelay = 2000;
  const fadeOutDelay = 1000;

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
    <div className='masthead'>
      <h1>
        <span className={`show ${fadeOut ? "fade-out" : ""}`}>
          {showWord && words[currentIndex]}
        </span>
      </h1>
    </div>
  );
}
