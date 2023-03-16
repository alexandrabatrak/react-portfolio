import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MotionPage from "../components/Motion/MotionPage";
import MotionParagraph from "../components/Motion/MotionParagraph";
import PageTitle from "../components/PageTitle/PageTitle";
import Container from "../components/Container/Container";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import ScrollDown from "../components/ScrollDown/ScrollDown";

export default function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <MotionPage className='projects'>
      <PageTitle title={"Projects"} />
      <Container>
        <MotionParagraph>
          <p>
            Explore my portfolio of frontend development projects, where the art
            of design and technical proficiency converge in perfect harmony.
            Each project showcases my keen eye for detail and user-centric
            approach, resulting in intuitive and visually appealing websites and
            applications.
          </p>
        </MotionParagraph>
        <MotionParagraph delay={0.6}>
          <p>
            Take a closer look at the inner workings of each project by clicking
            on them, and witness the design and development process that
            culminated in their creation.
          </p>
        </MotionParagraph>
      </Container>
      <MotionParagraph delay={0.7}>
        <ScrollDown />
      </MotionParagraph>
      <AnimatePresence mode='wait'>
        <ProjectsGrid />
      </AnimatePresence>
    </MotionPage>
  );
}
