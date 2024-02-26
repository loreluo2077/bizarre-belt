import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai'; // 导入播放图标

const MusicInfoFooter = ({ musicInfo }) => {
    return (
        <div className="bg-white shadow-lg p-4 mt-10 rounded-lg flex items-center justify-between">
            <div>
                <h3 className="text-lg font-semibold">{musicInfo.title}</h3>
                <p className="text-gray-600">{musicInfo.artist} - {musicInfo.album}</p>
            </div>
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={() => window.open(musicInfo.previewUrl, "_blank")}
            >
                <AiFillPlayCircle className="mr-2" /> 试听
            </button>
        </div>
    );
};

export default MusicInfoFooter;
