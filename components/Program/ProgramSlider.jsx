import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Program from './Program';
import { programsData } from '../../data/Program';


SwiperCore.use([Pagination, Navigation]);

const ProgramSlider = ({ programs }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true, renderBullet: renderProgramBullet }}
      scrollbar={{ draggable: true }}
      className='program-swiper'
    >
      {programs.map((program) => (
        <SwiperSlide key={program.id}>
          <Program program={program} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

function renderProgramBullet(index, className) {
  return `<span class="${className}">${programsData[index].name}</span>`;
}

export default ProgramSlider;
