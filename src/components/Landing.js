import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Landing() {
  const [loopN, setLoopN] = useState(0);
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
    <section className='bg-primary d-flex align-items-center min-vh-100 p-5'>
      <Container fluid>
        <Row>
          <div>
            <h1 className='display-1 reveal-text'>
              {`Hey! I `}
              <span className='wrap'>{text}</span>
            </h1>
            <p className='reveal-text'>Lorem ipsum dolore</p>
            <button className='btn btn-black reveal-text'>Get in touch</button>
          </div>
        </Row>
      </Container>
    </section>
  );
}
