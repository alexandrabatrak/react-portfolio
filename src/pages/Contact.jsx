import MotionPage from "../components/Motion/MotionPage";
import MotionParagraph from "../components/Motion/MotionParagraph";
import Container from "../components/Container/Container";
import PageTitle from "../components/PageTitle/PageTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <MotionPage className='contact'>
      <Container>
        <PageTitle title={"Contact"} />
        <MotionParagraph>
          <p>ckjdncjnfdkjvdf</p>
        </MotionParagraph>
        <ContactForm />
      </Container>
    </MotionPage>
  );
}
