import MotionParagraph from "../../components/Motion/MotionParagraph";
import { useParams, Link } from "react-router-dom";
import projects from "../../projects.json";

export default function ProjectNav() {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);
  const currIndex = projects.findIndex((project) => project.id === projectId);
  const prevIndex = (currIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currIndex + 1) % projects.length;
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];
  return (
    <MotionParagraph>
      <div className='project-navigation'>
        {prevProject && (
          <Link
            to={`/projects/${prevProject.id}`}
            className='project-navigation-link link-prev'>
            <div
              className='project-navigation-image bg-image'
              style={{
                backgroundImage: `url(${
                  prevProject.imgfolder + prevProject.img[0].url
                })`,
              }}>
              <h4>
                <i aria-hidden='true'>&larr;</i>
                <span>{prevProject.title}</span>
              </h4>
            </div>
          </Link>
        )}
        {nextProject && (
          <Link
            to={`/projects/${nextProject.id}`}
            className='project-navigation-link link-next'>
            <div
              className='project-navigation-image bg-image'
              style={{
                backgroundImage: `url(${
                  nextProject.imgfolder + nextProject.img[0].url
                })`,
              }}>
              <h4>
                <span>{nextProject.title}</span>
                <i aria-hidden='true'>&rarr;</i>
              </h4>
            </div>
          </Link>
        )}
      </div>
    </MotionParagraph>
  );
}
