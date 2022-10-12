import React from 'react';
import * as Bs from 'react-icons/bs';
import * as Io from 'react-icons/io';

interface SidebarSearchProps {
  value: string;
}

const SidebarSearch = (props: SidebarSearchProps) => {
  return (
    <div className="flex p-4 justify-between items-center border-b border-gray-100">
      <div className="flex items-center bg-gray-100 rounded-lg px-2 basis-11/12">
        <Io.IoMdSearch size={24} />
        <input
          type="search"
          placeholder="Cari atau mulai chat baru"
          className="text-gray-500 bg-gray-100 w-full outline-none p-1"
          value={props.value}
        />
      </div>
      <Bs.BsFilter size={24} />
    </div>
  );
}

export default SidebarSearch;
