import Projects from './Projects';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Home() {
  const [loopN, setLoopN] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toAnimate = ['create', 'develop', 'meep-meep', 'design'];
  const [text, setText] = useState('');
  const interval = 300;
  const [delta, setDelta] = useState(100 - Math.random() * 400);

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
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(interval);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopN(loopN + 1);
      setDelta(1);
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: '200%' }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='d-flex align-items-center min-vh-100 p-5'>
        <Container fluid>
          <Row>
            <div className='masthead'>
              <h1 className='display-1 text-white fst-italic'>
                {`I `}
                <span className='wrap'>{text}</span>
              </h1>
              <p className='text-white-50'>Lorem ipsum dolore</p>
              <button className='btn btn-cta btn-outline-light'>
                Get in touch
              </button>
            </div>
          </Row>
        </Container>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: '200%' }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='bg-black bg-opacity-75 d-flex align-items-center min-vh-100 p-5'>
        <Container fluid>
          <Projects />
        </Container>
      </motion.section>
    </>
  );
}
