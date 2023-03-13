import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './style.scss';

SwiperCore.use([Navigation, Pagination]);

export default function Slider({ project, imgNum }) {
  return (
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
            if (i < 1) {
              return null;
            }
            return (
              <SwiperSlide key={i}>
                <div className='project-image'>
                  <img src={project.imgfolder + image.url} alt={image.alt} />
                </div>
              </SwiperSlide>
            );
          })}

        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
      </Swiper>
    </div>
  );
}
