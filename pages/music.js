import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Comment from "../components/comment";
import Button from "../components/button";

export default function CommentCard() {
  return (
    <div className='bg-[#FE625B] h-screen max-w-min'>
      <Swiper navigation={true} modules={[Navigation]} className='px-2'>
        <SwiperSlide>
          <Comment
            msg={"听到这首歌,到这首到这首歌到这首歌反派就开始慌了"}
            fontSize='32'
            author={"@hellle"}
          />

          <Comment
            msg={"听到这首歌,到这首到这首歌到这首歌反派就开始慌了"}
            fontSize='20'
            author={"@hellle"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Comment
            msg={"听到这首歌,到这首到这首歌到这首歌反派就开始慌了"}
            fontSize='32'
            author={"@hellle"}
          />

          <Comment
            msg={"听到这首歌,到这首到这首歌到这首歌反派就开始慌了"}
            fontSize='20'
            author={"@hellle"}
          />
        </SwiperSlide>
      </Swiper>

      <Button text={"下一首"}></Button>

      <style jsx>{``}</style>
    </div>
  );
}
