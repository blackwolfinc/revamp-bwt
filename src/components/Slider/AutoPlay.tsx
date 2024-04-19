import Image from "next/image";
import React from "react";
import Slider from "react-slick";

 import Img from "../../../public/assets/img/slider/Frame1.png"
 import Img2 from "../../../public/assets/img/slider/Frame2.png"
 import Img3 from "../../../public/assets/img/slider/Frame3.png"
 import Img4 from "../../../public/assets/img/slider/Frame4.png"
 import Img5 from "../../../public/assets/img/slider/Frame5.png"
 import Img6 from "../../../public/assets/img/slider/Frame6.png"
 import Img7 from "../../../public/assets/img/slider/Frame7.png"
 import Img8 from "../../../public/assets/img/slider/Frame8.png"
 import Img9 from "../../../public/assets/img/slider/Frame9.png"
 import Img10 from "../../../public/assets/img/slider/Frame10.png"
 import Img11 from "../../../public/assets/img/slider/Frame11.png"
 import Img12 from "../../../public/assets/img/slider/Frame12.png"
 import Img13 from "../../../public/assets/img/slider/Frame13.png"



function AutoPlay() {
  return (
    <div className="slider-container h-[8rem] w-screen lg:w-[60svw]">
      <Slider 
      dots={false}
      infinite={true}
      slidesToShow={3}
      slidesToScroll={1} 
      autoplay={ true}
      speed={10000}
      autoplaySpeed={10}
      cssEase="linear"
      arrows={false}
    easing=""
      className="h-screen space-x-2 grayscale invert opacity-80">
        <div className="h-[10rem] overflow-hidden">
          <Image alt="1" src={Img} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="2" src={Img2} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="3" src={Img3} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="4" src={Img4} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="5" src={Img5} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="6" src={Img6} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image  alt="7" src={Img7} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="8" src={Img8} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="9" src={Img9} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="10" src={Img10} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="11" src={Img11} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="12" src={Img12} />
        </div>
        <div className="h-[10rem] overflow-hidden">
        <Image alt="13" src={Img13} />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
