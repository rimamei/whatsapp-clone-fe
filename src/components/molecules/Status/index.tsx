import { StatusDataProps } from '@services';
import React from 'react';
import * as Fa from 'react-icons/fa';

const Status = ({ updated, user, image }: StatusDataProps) => {
  return (
    <figure className="flex items-center h-20 p-4">
      <Fa.FaUser
        size={40}
        className="text-gray-900 p-2 rounded-full bg-gray-500"
      />
      <figcaption className="ml-4">
        <h3 className="text-base text-white">{user}</h3>
        <p className="text-gray-400 text-sm">{updated}</p>
      </figcaption>
    </figure>
  );
};

export default Status;
