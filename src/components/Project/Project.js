import projects from '../../projects.json';
import { Modal, Row, Col } from 'react-bootstrap';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/swiper-bundle.min.css';
import './style.scss';

SwiperCore.use([Navigation, Pagination]);

export default function Project({ id, show, onHide }) {
  const projectIndex = projects.findIndex((p) => p.id === id);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className='p-0'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={projectIndex}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}>
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Row className='project-slider-wrapper'>
                  <Col className='project-thumbnail col-sm-12 col-md-6'>
                    <div
                      className='bg-image'
                      style={{ backgroundImage: `url(${project.img})` }}
                    />
                  </Col>
                  <Col className='project-content col-sm-12 col-md-6'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>
                      <a href={project.repo} target='_blank' rel='noreferrer'>
                        Repo
                      </a>
                      <a
                        href={project.deployment}
                        target='_blank'
                        rel='noreferrer'>
                        Deployment
                      </a>
                    </p>
                  </Col>
                </Row>
              </motion.div>
            </SwiperSlide>
          ))}
          <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div>
        </Swiper>
      </Modal.Body>
    </Modal>
  );
}
