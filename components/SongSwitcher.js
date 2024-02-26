import React from 'react';
import { AiOutlineSwap } from 'react-icons/ai'; // 导入切换图标

const SongSwitcher = ({ onNextSong }) => {
    return (
        <div className="left-0 right-0 bg-white shadow-md p-4 mt-2 flex justify-center">
            <button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                onClick={onNextSong}
            >
                <AiOutlineSwap className="mr-2" /> 切换歌曲
            </button>
        </div>
    );
};

export default SongSwitcher;
