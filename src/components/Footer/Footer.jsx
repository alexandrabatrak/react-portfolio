import { Link } from "react-router-dom";
import Container from "../Container/Container";
import MotionParagraph from "../Motion/MotionParagraph";
import SocialIcons from "../SocialIcons/SocialIcons";
import { RiHeart3Fill } from "react-icons/ri";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <Container>
        <MotionParagraph>
          <div className='hire-me'>
            <p>Lemme do it for you</p>
            <Link to='/contact'>Hire me</Link>
          </div>
        </MotionParagraph>
        <MotionParagraph delay={0.6}>
          <SocialIcons />
        </MotionParagraph>
        <MotionParagraph delay={0.7}>
          <div className='copyright'>
            <p>
              Coded with{" "}
              <span>
                <RiHeart3Fill />{" "}
              </span>
              All right reserved. &copy; {new Date().getFullYear()}{" "}
              <a href='https://github.com/alexandrabatrak'>Alexandra Batrak</a>
            </p>
          </div>
        </MotionParagraph>
      </Container>
    </footer>
  );
}
