import React from 'react';
import './intro.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

import work4 from '../../assets/images/work4.jpg';
import work5 from '../../assets/images/work5.jpg';
import work6 from '../../assets/images/work6.jpg';

const Intro = () => {
  return (
    <section name="home" className="intro-section">
      <div className="intro">
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src={work6} alt="pic" className="swiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={work5} alt="pic" className="swiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={work4} alt="pic" className="swiper" />
          </SwiperSlide>
          ...
        </Swiper>
        {/* <div className="intro-name">
          <h3 className="intro-text intro-screen">I'M</h3>
          <div>
            <h3 className="intro-text intro-screen">A</h3>
          </div>
          <div>
            <h3 className="intro-text intro-screen">SOFTWARE DEVELOPER</h3>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Intro;
