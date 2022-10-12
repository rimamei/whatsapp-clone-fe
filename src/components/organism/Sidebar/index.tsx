import { SidebarHeader, SidebarList } from '@components';
import React from 'react';

interface SidebarProps {
  className: string;
}

const Sidebar = (props: SidebarProps) => {
  const { className } = props;

  return (
    <aside className={`relative ${className}`}>
      <SidebarHeader />
      <SidebarList />
    </aside>
  );
};

export default Sidebar;
