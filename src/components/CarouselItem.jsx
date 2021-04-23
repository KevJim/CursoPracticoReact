import React from 'react';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/icons8-play-64.png';
import plusIcon from '../assets/static/icons8-plus-64.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='https://images.pexels.com/photos/2837577/pexels-photo-2837577.jpeg?cs=srgb&dl=pexels-brady-knoll-2837577.jpg&fm=jpg'
      alt=''
    />
    <div className='carousel-item__details'>
      <div>
        <img
          className='carousel-item__details--img'
          src={playIcon}
          alt='Play Icon'
        />
        <img
          className='carousel-item__details--img'
          src={plusIcon}
          alt='Plus Icon'
        />
      </div>
      <p className='carousel-item__details--title'>Titulo Descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
