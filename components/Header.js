import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between items-center rounded-b-lg p-4 bg-blue-500">
            <div className="text-white font-bold">App Logo</div>
            <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center">U</div>
        </div>
    );
};

export default Header;
