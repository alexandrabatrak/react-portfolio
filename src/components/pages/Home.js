import Projects from './Projects';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
/* icons */
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Home() {
  const [loopN, setLoopN] = useState(0);
  // amimate opacity of text
  const [textClass, setTextClass] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
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
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
      // to animate each letter's opacity
      if (text.length === 1) {
        setTextClass('delete');
        setTimeout(() => {
          setTextClass('');
        }, 300);
      }
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(interval);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopN(loopN + 1);
      setDelta(100);
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: '200%' }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='d-flex align-items-center min-vh-100 p-5 position-relative'>
        <Container fluid>
          <Row>
            <div className='masthead'>
              <h1 className='display-1 text-white fst-italic'>
                {`I `}
                <span className={textClass}>{text}</span>
              </h1>
              <p className='text-white-50 w-50 fst-italic'>
                A design enthusiast with exceptional attention to detail, plenty
                of patience and a desire to create beautiful solutions.
              </p>
            </div>
          </Row>
          <div className='scroll-down position-absolute bottom-0 d-flex justify-content-center text-white fs-1 mb-3'>
            <Link
              to='projects'
              spy='true'
              smooth='true'
              duration={500}
              offset={-70}>
              <MdKeyboardArrowDown />
            </Link>
          </div>
        </Container>
      </motion.section>
      {/* <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: '200%' }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='bg-black bg-opacity-75 d-flex align-items-center min-vh-100 p-5'
        id='section'>
        <Container fluid>
          <Projects />
        </Container>
      </motion.section> */}
    </>
  );
}
