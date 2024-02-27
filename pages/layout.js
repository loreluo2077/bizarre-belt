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
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='px-2'
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
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

      <div className='flex justify-center'>
        <iframe
          title='播放器'
          border='0'
          width={400}
          height={90}
          src='//music.163.com/outchain/player?type=2&id=29539350&auto=0&height=66'
        ></iframe>
      </div>
      <Button text={"下一首"}></Button>

      <style jsx>{``}</style>
    </div>
  );
}
