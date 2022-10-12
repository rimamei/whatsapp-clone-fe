import React from 'react';
import SidebarMenu from '../SidebarMenu';
import SidebarSearch from '../SidebarSearch';

const SidebarList = () => {
  return (
    <div className="relative overflow-hidden">
      <SidebarSearch value={'text'} />
      <div className="overflow-y-scroll h-[90vh] relative">
        {Array(16)
          .fill('')
          .map((item) => (
            <SidebarMenu />
          ))}
      </div>
    </div>
  );
}

export default SidebarList;
