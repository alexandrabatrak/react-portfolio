import projects from '../../projects.json';
import { Row, Col } from 'react-bootstrap';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
// import 'swiper/swiper-bundle.min.css';
import './style.scss';

// SwiperCore.use([Navigation, Pagination]);

export default function Project({ id }) {
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  return (
    <div>
      {/* <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}> */}
      {/* {projects.map((project) => ( */}
      {/* // <SwiperSlide key={project.id}> */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}> */}
      <Row className='project-slider-wrapper'>
        <div className='project-thumbnail'>
          <div
            className='bg-image'
            style={{ backgroundImage: `url(../${project.img})` }}
          />
        </div>
        <div className='project-content bg-white'>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <a href={project.repo} target='_blank' rel='noreferrer'>
              Repo
            </a>
            <a href={project.deployment} target='_blank' rel='noreferrer'>
              Deployment
            </a>
          </p>
        </div>
      </Row>
      {/* </motion.div> */}
      {/* // </SwiperSlide> */}
      {/* ))} */}
      {/* // <div className='swiper-button-next'></div> */}
      {/* // <div className='swiper-button-prev'></div> */}
      {/* // </Swiper> */}
    </div>
  );
}
