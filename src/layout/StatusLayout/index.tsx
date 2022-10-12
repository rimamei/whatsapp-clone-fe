import React from 'react';
import { LayoutProps } from 'services';

const StatusLayout = ({ children }: LayoutProps) => {
  return (
    <section className='h-screen overflow-hidden bg-[#0b141a] z-10'>
      <div className="h-[90vh] border-box overflow-hidden drop-shadow shadow-gray-500 rounded-sm w-[90%] mx-auto my-10">
        {children}
      </div>
    </section>
  );
};

export default StatusLayout;
