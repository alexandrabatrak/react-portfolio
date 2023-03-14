import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Button from "../Button/Button";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className='hire-me'>
          <p>Lemme do it for you</p>
          <Link to='/contact'>
            <Button text={"Hire me"} className={"btn-cta"} />
          </Link>
        </div>
        <div className='socials-wrapper'>
          <ul>
            <li>*</li>
            <li>*</li>
            <li>*</li>
            <li>*</li>
          </ul>
        </div>
        <div className='copyright'>
          <p>
            Coded with * Copyright &copy; {new Date().getFullYear()} Alexandra
            Batrak
          </p>
        </div>
      </Container>
    </footer>
  );
}
