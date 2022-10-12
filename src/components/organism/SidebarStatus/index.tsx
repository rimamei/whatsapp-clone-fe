import React from 'react';
import SidebarList from './SidebarList';

interface SidebarProps {
  className: string;
}

const SidebarStatus = (props: SidebarProps) => {
  const { className } = props;

  return (
    <aside className={`relative bg-[#3b4a54] opacity-80 ${className}`}>
      <SidebarList />
    </aside>
  );
};

export default SidebarStatus;
