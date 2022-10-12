import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Hi from 'react-icons/hi';
import * as Io from 'react-icons/io';

interface ChatHeaderProps {
  className?: string;
}

const ChatHeader = ({ className }: ChatHeaderProps) => {
  return (
    <div className={`${className} flex w-full h-20 bg-gray-200 p-4 justify-between`}>
      <div className="flex items-center">
        <Fa.FaUser
          size={40}
          className="text-gray-600 p-2 rounded-full bg-gray-300"
        />
        <p className="text-base ml-4">User</p>
      </div>
      <div className="flex items-center">
        <Io.IoMdSearch size={24} />
        <Hi.HiDotsVertical size={24} className="ml-4" />
      </div>
    </div>
  );
}

export default ChatHeader;
