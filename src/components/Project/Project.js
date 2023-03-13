import projects from '../../projects.json';
import Separator from '../Separator/Separator';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/swiper-bundle.min.css';
import './style.scss';

SwiperCore.use([Navigation, Pagination]);

export default function Project({ id }) {
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const imgNum = project.img.length;
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.2 }}>
          {/* <div className='project-head'> */}
          {/* <div className='project-thumbnail'>
          <div
            className='bg-image'
            style={{
              backgroundImage: `url(${project.imgfolder + project.img[0].url})`,
            }}
          />
        </div> </div>*/}
          <div className='section'>
            <div className='project-title-wrapper'>
              <h3>{project.title}</h3>
            </div>
            <Separator />
            <div className='project-about'>
              <p>{project.description.short}</p>
            </div>
            {project.links && (
              <div className='project-links'>
                {project.links.deployment && (
                  <a href={project.deployment} target='_blank' rel='noreferrer'>
                    Live site
                  </a>
                )}
                {project.links.repo && (
                  <a href={project.repo} target='_blank' rel='noreferrer'>
                    Github
                  </a>
                )}
              </div>
            )}
          </div>
          <div className='project-image'>
            <img
              src={project.imgfolder + project.img[0].url}
              alt={project.img[0].alt}
            />
          </div>
          {project.description && (
            <div className='project-description section'>
              <p>{project.description?.long}</p>
            </div>
          )}

          {imgNum > 1 && (
            <div className='project-image'>
              <img
                src={project.imgfolder + project.img[1].url}
                alt={project.img[1].alt}
              />
            </div>
          )}
          <div className='project-process section'>
            <p>{project.process}</p>
          </div>

          <div className='swiper-slider-wrapper'>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}>
              {imgNum > 2 &&
                project.img.map((image, i) => {
                  // start from index 2
                  if (i < 2) {
                    return null;
                  }
                  return (
                    <SwiperSlide key={i}>
                      <div className='project-image'>
                        <img
                          src={project.imgfolder + image.url}
                          alt={image.alt}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}

              <div className='swiper-button-next'></div>
              <div className='swiper-button-prev'></div>
            </Swiper>
          </div>
          {project.features && (
            <div className='project-features section'>
              <div className='project-subheading'>
                <h4>Features</h4>
              </div>
              <ul>
                {project.features.map((feature, i) => {
                  return <li key={i}>{feature}</li>;
                })}
              </ul>
            </div>
          )}
          <div className='project-techspec'>
            {/* TODO: Add icons for tools */}
            <div className='project-subheading'>
              <h4>Technologies</h4>
            </div>
            <ul>
              {project.tools.map((tool, i) => {
                return <li key={i}>{tool}</li>;
              })}
            </ul>
          </div>
          <Separator />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
