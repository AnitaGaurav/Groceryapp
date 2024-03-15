import React from 'react'
import './Brands.css';

import img1 from '../Assets/brand1.png';
import img2 from '../Assets/brand2.png';
import img3 from '../Assets/brand3.png';
import img4 from '../Assets/brnad4.png';
import img5 from '../Assets/brand5.png';
import img6 from '../Assets/brnad6.png';


export const Brands = () => {
  return (
    <div className='px-[105px] mt-60px'>
        <div className='flex justify-center items-center gap-[62px] pt-8'>
            <img src={img1} className='brnadImg' alt='' />
            <img src={img2} className='brnadImg' alt='' />
            <img src={img3} className='brnadImg' alt='' />
            <img src={img4} className='brnadImg' alt='' />
            <img src={img5} className='brnadImg' alt='' />
            <img src={img6} className='brnadImg' alt='' />

        </div>
    </div>
  )
}
