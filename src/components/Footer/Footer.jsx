import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { AnimatePresence } from "framer-motion";
import MotionFade from "../Motion/MotionFade";
import SocialIcons from "../SocialIcons/SocialIcons";
import { RiHeart3Fill } from "react-icons/ri";
import "./footer.scss";

export default function Footer() {
  return (
    <AnimatePresence mode='wait'>
      <footer>
        <Container>
          <MotionFade>
            <div className='hire-me'>
              <p>Lemme do it for you</p>
              <Link to='/contact'>
                <span>Hire me</span>
              </Link>
            </div>
          </MotionFade>
          <MotionFade delay={0.5}>
            <SocialIcons />
          </MotionFade>
          <MotionFade delay={0.7}>
            <div className='footer'>
              <div className='footer-links'>
                <ul>
                  <li>
                    <Link to='/privacy-statement'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to='/terms-and-conditions'>Terms and Conditions</Link>
                  </li>
                  <li>
                    <span>This portfolio is a work in progress.</span>
                  </li>
                </ul>
              </div>
              <div className='copyright'>
                <p>
                  Coded with{" "}
                  <span>
                    <RiHeart3Fill />{" "}
                  </span>
                  All right reserved. &copy; {new Date().getFullYear()}{" "}
                  <a
                    href='https://github.com/alexandrabatrak'
                    target='_blank'
                    rel='noreferrer'>
                    Alexandra Batrak
                  </a>
                </p>
              </div>
            </div>
          </MotionFade>
        </Container>
      </footer>
    </AnimatePresence>
  );
}
