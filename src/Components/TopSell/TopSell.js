import React from 'react'
import './TopSell.css';
import SliderTwo from '../SliderTwo/SliderTwo';

export const TopSell = () => {
  return (
    <div className='mt-[60px] md:px-[105px]'>
        <div data-aos='fade-down' data-aos-duration='2000' data-aos-easing='ease-in-out' className='section-title flex justify-center items-center gap-[20px]'>
            <div className='section-line'></div>
            <h1>Top Sell Products</h1>
            <div className='section-line'></div>
        </div>

        <div data-aos='fade-left' data-aos-duration='2000' data-aos-easing='ease-in-out' className='mt-[40px]'>
            <SliderTwo/>
        </div>
        <hr className='mt-[67px]' />
    </div>
  )
}
