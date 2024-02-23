import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  AiOutlineLike,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai"; // 使用react-icons库

const CommentCard = ({ comment, onPrevious, onNext }) => {
  const [likes, setLikes] = useState(comment.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
      // 在这里可以添加与后端通信的逻辑来更新点赞数
    }
  };

  return (
    <Card className='mt-6 w-96'>
      <CardHeader floated={false} className='h-10'>
        分享
      </CardHeader>
      <CardBody>
        <div className='flex items-center gap-4'>
          <Avatar
            src='https://docs.material-tailwind.com/img/face-2.jpg'
            alt='avatar'
            size='sm'
          />
          <div>
            <Typography variant='h6'>Tania Andrew</Typography>
          </div>
        </div>
        <Typography>{comment.text}</Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button onClick={onNext}> next</Button>
      </CardFooter>
    </Card>
    // <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">

    //     <div className="flex justify-between items-center">
    //         <button onClick={onPrevious} className="p-2">
    //             <AiOutlineArrowLeft className="text-xl text-gray-600" />
    //         </button>
    //         <div className="flex-1 text-center">
    //             <p className="text-lg font-semibold text-gray-800">{comment.musicTitle} - {comment.artist}</p>
    //             <p className="mt-2 text-gray-600">{comment.text}</p>
    //         </div>
    //         <button onClick={onNext} className="p-2">
    //             <AiOutlineArrowRight className="text-xl text-gray-600" />
    //         </button>
    //     </div>
    //     <div className="flex justify-end mt-4">
    //         <button onClick={handleLike} className={`p-2 rounded-full ${isLiked ? 'text-red-500' : 'text-gray-400'}`}>
    //             <AiOutlineLike className="text-xl" />
    //             <span className="ml-2">{likes}</span>
    //         </button>
    //     </div>
    // </div>
  );
};

export default CommentCard;
