import { Status } from '@components';
import React from 'react';

const SidebarList = () => {
  const data = [
    {
      updated: 'Today, 2.12 AM',
      image: '',
      user: 'Henry',
    },
    {
      updated: 'Today, 2.12 AM',
      image: '',
      user: 'Hary',
    },
    {
      updated: 'Today, 1.09 PM',
      image: '',
      user: 'Tia',
    },
    {
      updated: 'Today, 2.12 AM',
      image: '',
      user: 'Resh',
    },
  ];

  return (
    <div className="mx-4">
      <Status user="My Status" updated="No latest Status" image={''} />;
      <div className="border-b border-gray-400" />
      <div className="relative overflow-hidden pt-4">
        <p className="text-sm text-gray-300">LATEST</p>
        {data.map((v, index) => (
          <Status
            key={index}
            updated={v.updated}
            image={v.image}
            user={v.user}
          />
        ))}
        <div className="border-b border-gray-400" />
        <p className="text-sm text-gray-300 py-4">VIEWED</p>
        {data.map((v, index) => (
          <Status
            key={index}
            updated={v.updated}
            image={v.image}
            user={v.user}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarList;
