import React, { useRef, useState } from "react";
import Song from "../components/song";
import Button from "../components/button";

export default function CommentCard() {

 const songData={
  name:"风居住的街道",
  src:"//music.163.com/outchain/player?type=2&id=29539350&auto=0&height=66&ran=12",
  comments:[
    {"content":"青丝头,少年梦.许一人天长地久,尽一世人间繁华","author":"kn--"},
    {"content":"早已泛黄的回忆,却又如潮水般涨于心头","author":"我不想起名字-_-"},
    {"content":"好下烟的曲子","author":"我也不是k歌之王"}
  ]

 }
  return (
    <div className='bg-[#FE625B] h-screen flex flex-col justify-center space-y-10'>
    
    <Song songData={songData}/>
      
    <Button text={"下一首"}></Button>
    </div>
  );
}
