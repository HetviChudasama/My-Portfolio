import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

// Images
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';


const Portfolio = () => {
  return (
    <div className='portfolio'>
    {/* heading */}
    <span>Recent Projects</span>
    <span>Portfolio</span>

    

<Swiper

  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={30}
  slidesPerView={3}
  grabCursor={true}
  className="portfolio-slider"
>
  <SwiperSlide>
    <img src={Sidebar} alt="Sidebar Project" />
  </SwiperSlide>

  <SwiperSlide>
    <img src={Ecommerce} alt="Ecommerce Project" />
  </SwiperSlide>

  <SwiperSlide>
    <img src={MusicApp} alt="Music App Project" />
  </SwiperSlide>

  <SwiperSlide>
    <img src={HOC} alt="HOC Project" />
  </SwiperSlide>
</Swiper>

    </div>

  )}
export default Portfolio
