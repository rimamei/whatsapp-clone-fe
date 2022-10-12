import React from 'react';
import * as Fa from 'react-icons/fa';
import { ellipsis } from 'utils/ellipsis';

const SidebarMenu = () => {
  return (
    <div className="p-4 flex bg-white">
      <Fa.FaUser
        size={40}
        className="text-gray-600 p-2 rounded-full bg-gray-300"
      />
      <div className='ml-4 flex justify-between w-full border-b border-gray-100 '>
        <div>
          <h2 className="text-base">User</h2>
          <p className="text-sm text-gray-500">
            {ellipsis('Hello 10 karakter di dalam chat ya')}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-300">kemarin</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
