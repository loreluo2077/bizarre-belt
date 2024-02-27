import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Comment from "../components/comment";

export default function Song({ songData }) {
  const comments = songData.comments;
  return (
    <div className="bg-[#FE625B] flex flex-col space-y-10">
      <Swiper
        className="px-2 max-w-full sm:max-w-screen-md"
        navigation={true}
    
        modules={[Navigation]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {comments.map((comment) => (
          <SwiperSlide>
            <Comment
              msg={comment.content}
              fontSize="32"
              author={comment.author}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center">
        <iframe
          title="播放器"
          border="0"
          width={400}
          height={90}
          src={songData.src}
          onLoad={() => console.log("loaded")}
        ></iframe>
      </div>
    </div>
  );
}
