import projects from './projects.json';
import { Modal, Row, Col } from 'react-bootstrap';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { motion } from 'framer-motion';

SwiperCore.use([Navigation, Pagination]);

export default function ProjectDetails({ id, show, onHide }) {
  const projectIndex = projects.findIndex((p) => p.id === id);

  return (
    <Modal show={show} onHide={onHide} size='xxl' centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
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
                <Row>
                  <Col className=''>
                    <div
                      className='bg-image'
                      style={{ backgroundImage: `url(${project.img})` }}
                    />
                  </Col>
                  <Col>
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
