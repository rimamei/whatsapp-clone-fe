import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Md from 'react-icons/md';
import * as Hi from 'react-icons/hi';
import StatusIcon from './StatusIcon';
import { Icons } from '@assets';

const SidebarHeader = () => {
  return (
    <div className="flex justify-between items-center h-20 bg-gray-200 p-4 border border-gray-100">
      <Fa.FaUser
        size={40}
        className="text-gray-600 p-2 rounded-full bg-gray-300"
      />
      <div className="flex">
        {/* <Icons.StatusOnline /> */}
        <StatusIcon />
        <Md.MdMessage size={24} className="ml-4" />
        <Hi.HiDotsVertical size={24} className="ml-4" />
      </div>
    </div>
  );
};

export default SidebarHeader;
