import React from 'react';
import { LayoutProps } from '@services';

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <section className='h-screen overflow-hidden before:content-[""] before:w-full before:top-0 before:z-0 before:absolute before:h-[222px] before:bg-teal-600 bg-gray-300 z-10'>
      <div className="h-[90vh] border-box overflow-hidden bg-white drop-shadow shadow-gray-500 rounded-sm w-[90%] mx-auto my-10">
        {children}
      </div>
    </section>
  );
};

export default DefaultLayout;
