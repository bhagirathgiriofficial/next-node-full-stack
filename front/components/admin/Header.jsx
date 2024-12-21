import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4 shadow-md">
            <div className="flex justify-end items-center">
                <div className="flex gap-3 items-center space-x-4">
                    <button className="relative text-white focus:outline-none">
                        <FaBell size={24} />
                        <span className="absolute top-[-10px] right-[-15px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">4</span>
                    </button>
                    <button className="text-white focus:outline-none">
                        <FaUserCircle size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;