import React from 'react'
import './FeatureProducts.css'
import SliderOne from '../SliderOne/SliderOne'

export default function FeatureProducts() {
  return (
    <div className='mx-[200px] mt-24'>

        <div data-aos='fade-down' data-aos-duration='200' data-aos-easing='ease-in-out' className='section-title flex justify-center items-center gap-[20px]'>
            <div className='section-line'></div>
            <h1>Feature Products</h1>
            <div className='section-line'></div>
        </div>

        <div data-aos="fade-right" data-aos-duration="1500" className='mt-[60px]'>
          <SliderOne />
        </div>
    </div>
  )
}
