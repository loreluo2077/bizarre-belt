import { Swiper, SwiperSlide } from "swiper/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import _JSXStyle from "styled-jsx/style";

export default function CommentCard() {
  return (
    <div className='bg-[#f8fafc]'>
      <Swiper
        effect={"cards"}
        modules={[EffectCards]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className='h-64 w-64'
      >
        <SwiperSlide>
          <div className='w-64 '>12323</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-64 '>12323</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-64 0'>12323</div>
        </SwiperSlide>
      </Swiper>
      <_JSXStyle id='123'>{`


.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
  
  .swiper-slide {
    background-color: #fff;
    border:1
  }
  
    
    `}</_JSXStyle>
    </div>
  );
}
