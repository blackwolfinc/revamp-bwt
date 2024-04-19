import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import p0 from '../../../public/assets/project/p0.png';
import p1 from '../../../public/assets/project/p1.png';
import p2 from '../../../public/assets/project/p2.png';
import p3 from '../../../public/assets/project/p3.png';
import p4 from '../../../public/assets/project/p4.png';
import p5 from '../../../public/assets/project/p5.png';
import p6 from '../../../public/assets/project/p6.png';
import p7 from '../../../public/assets/project/p7.png';
import p8 from '../../../public/assets/project/p8.png';
import p9 from '../../../public/assets/project/p9.png';
import p10 from '../../../public/assets/project/p10.png';

const images = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9 ,p10];

const Clients: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col lg:flex-row items-center justify-between px-[5svw] z-10">
    <div className='absolute lg:bottom-[3svh] right-0 w-full flex justify-center lg:justify-start mt-[10svh] lg:mt-[3svh]'> <h1 className='px-[6rem] text-[24px] lg:text-[46px]'>Our Project</h1></div>
      <div className="bg-gray-300/10 h-screen scale-[0.9] lg:mt-0 lg:h-[70svh] z-[20]  over lg:scale-100 w-screen lg:w-[50svw] rounded-lg shadow-2xl flex items-center justify-center">
        <Slider dots={false} infinite arrows autoplay  autoplaySpeed={6000} className="h-[70svh] w-full">
          {images.map((image, index) => (
            <div key={index} className="!flex items-center justify-center">
              <Image
                alt=""
                height={200}
                width={700}
                src={image}
                priority
                className="scale-[80%] border-[4px] border-gray-300/5 rounded-lg p-[2rem]"
              />
            </div>
          ))}
        </Slider>
      </div>
      <button className="z-50 lg:left-auto lg:mt-[-3rem] lg:hidden bottom-[20svh] lg:bottom-auto cursor-pointer absolute">
        {/* <Link href="https://nos-proxy.vercel.app/" target="_blank" className="bg-gray-600 z-[80] mt-[-10rem] py-[1rem] px-[2rem] cursor-pointer rounded-md">Open Site</Link> */}
      </button>
      <div className="lg:bg-white h-0 lg:h-[70svh] hidden lg:flex w-screen lg:w-[35svw] rounded-lg shadow-2xl p-[2rem] items-center justify-center relative">
        <button className="z-50 left-0 lg:left-auto lg:mt-[-3rem] bottom-[2svh] lg:bottom-auto cursor-pointer absolute">
          {/* <Link href="https://nos-proxy.vercel.app/" target="_blank" className="bg-red-700 z-[80] mt-[-10rem] py-[1rem] px-[2rem] cursor-pointer rounded-md">Open Site</Link> */}
        </button>
      </div>
    </div>
  );
};

export default Clients;
