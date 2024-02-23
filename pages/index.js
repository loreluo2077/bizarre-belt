import React, { useState } from "react";
import Header from "./components/Header";
import CommentCard from "./components/CommentCard";
import MusicInfoFooter from "./components/MusicInfoFooter";
import SongSwitcher from "./components/SongSwitcher";

export default function Home() {
  // 假设的歌曲和评论数据
  const songs = [
    {
      id: 1,
      title: "歌曲1",
      artist: "艺术家1",
      album: "专辑1",
      previewUrl: "#",
      comments: [{ id: 1, artist: "zhang san", text: "哈哈哈", likes: 10 }],
    },
    {
      id: 2,
      title: "歌曲2",
      artist: "艺术家2",
      album: "专辑1",
      previewUrl: "#",
      comments: [{ id: 1, text: "呵呵呵", likes: 10 }],
    },
    // 更多歌曲和评论数据...
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const onNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length); // 循环播放列表
  };

  return (
    <div className='container mx-auto px-4'>
      <Header />

      <main>
        {songs[currentSongIndex].comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}

        <MusicInfoFooter musicInfo={songs[currentSongIndex]} />
        <SongSwitcher onNextSong={onNextSong} />
      </main>

      <footer></footer>
    </div>
  );
}
