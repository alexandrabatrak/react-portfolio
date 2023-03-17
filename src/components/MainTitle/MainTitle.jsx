import { useState, useEffect, useCallback, useRef } from "react";
//can't use useScroll from framer-motion interferes with HomeSection
// import { useScroll, useTransform } from "framer-motion";
import "./maintitle.scss";

export default function MainTitle() {
  const wordsArr = ["I Design", "I Build", "I Create"];
  const [words, setWords] = useState(wordsArr);
  const [currIndex, setCurrIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const titleRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");

  const indexDelay = 4000;
  const showDelay = 2000;
  const fadeOutDelay = 1000;

  const setWordsCallback = useCallback((newWords) => {
    setWords(newWords);
    setCurrIndex(0);
  }, []);

  useEffect(() => {
    setWordsCallback(wordsArr);
  }, [setWordsCallback]);

  useEffect(() => {
    const isLastWord = currIndex === words.length - 1;
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
      setCurrIndex((prevIndex) =>
        isLastWord || prevIndex === words.length - 1 ? prevIndex : prevIndex + 1
      );
      setShowWord(true);
      setFadeOut(false);
    }, indexDelay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(showTimeout);
    };
  }, [currIndex, words]);

  // FIXME: this doesn't work as needed?

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currScrollY = window.scrollY;
    const scrollDir = currScrollY > lastScrollY ? "down" : "up";
    setScrollDir(scrollDir);
    lastScrollY = currScrollY;
  };

  let lastScrollY = window.scrollY;

  const letterSpacing = () => {
    if (scrollDir === "down") {
      return `${0 + window.scrollY / 30}px`;
    } else {
      return `${letterSpacing < 0 ? 0 : letterSpacing - window.scrollY / 30}px`;
    }
  };

  return (
    <div className='masthead'>
      <h1 ref={titleRef} style={{ letterSpacing: letterSpacing() }}>
        <span className={`show ${fadeOut ? "fade-out" : ""}`}>
          {showWord && words[currIndex]}
        </span>
      </h1>
    </div>
  );
}
