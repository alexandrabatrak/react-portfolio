import { useEffect } from "react";
import Container from "../components/Container/Container";
import PageTitle from "../components/PageTitle/PageTitle";
import MotionPage from "../components/Motion/MotionPage";
import MotionParagraph from "../components/Motion/MotionParagraph";
import Separator from "../components/Separator/Separator";
import Subheading from "../components/Subheading/Subheading";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <MotionPage id={"privacy"} className='privacy'>
      <Container>
        <PageTitle title={"Privacy Statement"} />
        <Separator />
        <MotionParagraph>
          <Subheading
            text={"What personal data do I collect and why do I collect it"}
          />
          <div className='text-font'>
            <h5>Contact form</h5>
            <p>
              I only use the information you provide in the contact form to
              contact you back. You can request to receive an exported file of
              the personal data I hold about you, including any data you have
              provided to me. You can also request that I erase any personal
              data I hold about you. This does not include any data I am obliged
              to keep for administrative, legal, or security purposes.
            </p>
            <h5>Cookies</h5>
            <p>
              This website stores selected setting for a sound on/off for your
              convenience. You can manage and/or delete these small files in
              your browser as you wish.
            </p>
          </div>
        </MotionParagraph>
      </Container>
    </MotionPage>
  );
}
