import React from 'react'
import './Blog.css';
import {Fade} from 'react-reveal';
import img1 from '../Assets/blog1.png'
import img2 from '../Assets/blog2.png'

import icon1 from '../Assets/milk.png';
import icon2 from '../Assets/mutton.png';
import icon3 from '../Assets/carrot.png';
import icon4 from '../Assets/shalgom.png';
import icon5 from '../Assets/greenflower.png';
import icon6 from '../Assets/mushro.png';
import icon7 from '../Assets/fish.png';



export const Blog = () => {
  return (
    <div className='mt-[80px] px-[105px] relative'>

        <img src={icon1} className='absolute left-[47%] top-[-70px]' alt=''/>
        <img src={icon2} className='absolute left-[80%]' alt=''/>
        <img src={icon3} className='absolute  top-[50%]' alt=''/>
        <img src={icon4} className='absolute left-[44%] top-[45%]' alt=''/>
        <img src={icon5} className='absolute left-[84%] top-[34%]' alt=''/>
        <img src={icon6} className='absolute left-[5%] bottom-[20px]' alt=''/>
        <img src={icon7} className='absolute left-[42%] bottom-[80px]' alt=''/>


        <div className='flex pt-24'>
            <Fade left delay={1000} >
                <div className='w-1/2'>
                    <div className='blog-cont-img cursor-pointer w-[572px] h-[354px]'>
                        <div className='blogImg'>
                            <img src={img1} alt='' />
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade left delay={1500}>
                <div className='w-1/2 px-[80px] py-[35px]'>
                    <h1 className='text-[35px] font-[700] leading-9'>Minim laboris dolor consequat non mollit Lorem pariatur enim irure consectetur.</h1>
                    <p className='text-[13px] text-[#7E7C7C] mt-[16px] leading-normal'>Veniam ullamco adipisicing dolor eiusmod est deserunt ut adipisicing laboris tempor. Id incididunt proident eiusmod nulla culpa proident sint. Eu pariatur ex eiusmod do ea excepteur. Commodo laborum amet esse occaecat sint cillum. Irure in irure laborum excepteur cupidatat tempor adipisicing. Amet laborum commodo magna velit consectetur excepteur commodo labore consectetur proident. Voluptate dolor ut est in velit proident esse deserunt fugiat qui do esse aliquip.</p>
                </div>
            </Fade>
        </div>

        <div className='flex mt-[40px]'>
            <Fade right delay={2500}>
                <div className='w-1/2 py-[80px] px-[25px]'>
                    <h1 className='text-[35px] font-[700] leading-8'>Why Customer Love us</h1>
                    <p className='text-[13px] text-[#7E7C7C] mt-[16px]'>
                        Eiusmod sunt incididunt est dolore sint occaecat consequat ex. Eu adipisicing est excepteur voluptate nulla ex exercitation mollit. In labore nostrud eiusmod ut labore.
                    </p>
                    <div className='mt-[18px]'>
                        <h3 className='text-[18px] font-[600]'>Customer Name</h3>
                        <div className='flex gap-[18px] mt-[8px]'>
                            <div className='w-[6px] h-[6px] rounded-full bg-[#D9D9D9]'></div>
                            <div className='w-[6px] h-[6px] rounded-full bg-[#D9D9D9]'></div>
                            <div className='w-[18px] h-[6px] rounded-full bg-[#2AC01D]'></div>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade top delay={2000}>
                <div className='ml-[60px] blog-cont-img cursor-pointer w-[572px] h-[354px]'>
                    <div className='blogImg'>
                        <img src={img2} alt='' />
                    </div>
                </div>
            </Fade>
        </div>

        <hr className='mt-[70px]' />
    </div>
  )
}
