import MotionSection from '../components/MotionSection/MotionSection';
import Container from '../components/Container/Container';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';
import PageTitle from '../components/PageTitle/PageTitle';

export default function Projects() {
  return (
    <MotionSection className='projects'>
      <PageTitle title={'Projects'} />
      <Container>
        <p>
          Explore my portfolio of frontend development projects, where the art
          of design and technical proficiency converge in perfect harmony. Each
          project showcases my keen eye for detail and user-centric approach,
          resulting in intuitive and visually appealing websites and
          applications.
        </p>
        <p>
          Take a closer look at the inner workings of each project by clicking
          on them, and witness the design and development process that
          culminated in their creation.
        </p>
      </Container>
      <ProjectsGrid />
    </MotionSection>
  );
}
