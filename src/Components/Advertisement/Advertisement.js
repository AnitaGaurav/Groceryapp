import React from 'react'
import './Advertisement.css';
import { MdDoubleArrow } from "react-icons/md";

import img1 from '../Assets/ad1.png';
import img2 from '../Assets/ad2.png';
import img3 from '../Assets/ad3.png';
import img4 from '../Assets/ad4.png';
import img5 from '../Assets/ad5.png';


const Advertisement = () => {
  return (
    <div className='advertisement-container'>

        <div className='advertisement-sub-container'>
            <div className='cont-img'>
                <div className='hoverImg'>
                    <div className='hoverImg-content'>
                        <div className='shop-now-btn ml-[125px]'>
                            <button>Shop Now</button>
                            <MdDoubleArrow className='ml-1'/>
                        </div>
                        <h1>Lorem Ipsum</h1>
                        <p>Why do we use it?</p>
                    </div>
                    <img src={img1} alt='' />
                </div>
            </div>

            <div>
                <div className='relative'>
                    <div className='center-img-content'>
                        <div className='shop-now-btn ml-[70px]'>
                            <button>Shop Now</button>
                            <MdDoubleArrow className='ml-1'/>
                        </div>
                        <h1>Lorem Ipsum</h1>
                        <p>Why do we use it?</p>
                    </div>
                    <div className='hover02 column-top'>
                        <div>
                            <div className='center-top-img'>
                                <img src={img2} alt='' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-[28px] mt-[20px]'>
                    <div className='relative'>
                        <div className='bottom-img1-content'>
                            <h1>Lorem Ipsum</h1>
                            <p>Why do we use it?</p>
                            <div className='shop-now-btn ml-[70px]'>
                                <button>Shop Now</button>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                            <div className='bg-black h-[1px] w-[40%] mx-auto'></div>
                        </div>
                        <div className='hover03 column'>
                            <div>
                                <div className='bottomTwoImg'>
                                    <img src={img3} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='absolute z-10 left-[10px] top-[10px]'>
                            <h1 className='text-[35px] font-[900] text-[#881F16] leading-[40px]'>Lorem Ipsum</h1>
                            <p className='text-[15px] text-[#882016] text-center'>Why do we use it?</p>
                            <div className='shop-now-btn ml-[70px]'>
                                <button>Shop Now</button>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                            <div className='bg-black h-[1px] w-[40%] ml-[70px]'></div>
                        </div>
                        <div className='hover03 column'>
                            <div>
                                <div className='bottomTwoImg'>
                                    <img src={img4} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cont-img'>
                <div className='hoverImg relative'>
                    <div className='right-img-content'>
                        <h1>Lorem Ipsum</h1>
                        <p>Why do we use it?</p>
                    </div>
                    <img src={img5} alt='' />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Advertisement