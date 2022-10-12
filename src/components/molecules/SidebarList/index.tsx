import React, { useState } from 'react';
import SidebarMenu from '../SidebarMenu';
import SidebarSearch from '../SidebarSearch';

const SidebarList = () => {
  const [search, setSearch] = useState('');

  const handleChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="relative overflow-hidden">
      <SidebarSearch onChange={handleChange} value={'text'} />
      <div className="overflow-y-scroll h-[90vh] relative">
        {Array(16)
          .fill('')
          .map((item, index) => (
            <SidebarMenu key={index} />
          ))}
      </div>
    </div>
  );
};

export default SidebarList;
