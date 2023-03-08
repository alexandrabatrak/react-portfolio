import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Landing() {
  const [loopN, setLoopN] = useState('0');
  const [isDeleting, setIsDeleting] = useState(false);
  const toAnimate = ['create', 'develop', 'meep-meep'];
  const [text, setText] = useState('');
  const interval = 500;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

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
      setDelta(100);
    }
  };

  return (
    <Container fluid>
      <Row>
        <div className='bg-primary d-flex align-items-center min-vh-100 px-5'>
          <div>
            <h1 className='display-1'>
              {`Hey! I `}
              <span className='wrap'>{text}</span>
            </h1>
            <p>Lorem ipsum dolore</p>
            <button>Get in touch</button>
          </div>
        </div>
      </Row>
    </Container>
  );
}
