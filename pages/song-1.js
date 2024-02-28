import React, { useRef, useState } from "react";
import Song from "../components/song";
import Button from "../components/button";

export default function CommentCard() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songData = [
    {
      name: "风居住的街道",
      src: "//music.163.com/outchain/player?type=2&id=29539350&auto=0&height=66&ran=12",
      comments: [
        {
          content: "青丝头,少年梦.许一人天长地久,尽一世人间繁华",
          author: "kn--",
        },
        {
          content: "早已泛黄的回忆,却又如潮水般涨于心头",
          author: "我不想起名字-_-",
        },
        { content: "好下烟的曲子", author: "我也不是k歌之王" },
      ],
    },
    {
      name: "风居住的街道1",
      src: "//music.163.com/outchain/player?type=2&id=29539350&auto=0&height=66&ran=12",
      comments: [
        {
          content: "1青丝头,少年梦.许一人天长地久,尽一世人间繁华",
          author: "kn--",
        },
        {
          content: "1早已泛黄的回忆,却又如潮水般涨于心头",
          author: "我不想起名字-_-",
        },
        { content: "1好下烟的曲子", author: "我也不是k歌之王" },
      ],
    },
  ];

  // 处理点击“下一首”按钮的事件
  const handleNextSong = () => {
    // 计算下一首歌曲的索引，如果到达数组末尾则循环到第一首
    const nextSongIndex = (currentSongIndex + 1) % songData.length;

    setCurrentSongIndex(nextSongIndex);
  };

  return (
    <div className='bg-[#FE625B] h-screen flex flex-col justify-center space-y-10'>
      <Song
        key={songData[currentSongIndex].name}
        songData={songData[currentSongIndex]}
      />

      <Button text={"下一首"} onClick={handleNextSong}></Button>
    </div>
  );
}
