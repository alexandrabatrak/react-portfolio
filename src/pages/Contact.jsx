import MotionPage from "../components/Motion/MotionPage";
import MotionParagraph from "../components/Motion/MotionParagraph";
import Container from "../components/Container/Container";
import PageTitle from "../components/PageTitle/PageTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import { useEffect } from "react";
import Subheading from "../components/Subheading/Subheading";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <MotionPage className='contact'>
      <Container>
        <PageTitle title={"Contact"} />
        <MotionParagraph>
          <Subheading text={"Tell me some good news"} />
        </MotionParagraph>
        <MotionParagraph delay={0.7}>
          <ContactForm />
        </MotionParagraph>
      </Container>
    </MotionPage>
  );
}
