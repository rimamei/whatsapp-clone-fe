import React from 'react';
import * as Io from 'react-icons/io';
import { LayoutProps } from '@services';

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <section className='h-screen before:content-[""] before:w-full before:top-0 before:z-0 before:absolute before:h-[222px] before:bg-teal-600 min-h-screen bg-gray-300 z-10 py-4'>
      <div className="relative z-20 flex items-center my-4 lg:my-7 mx-4 lg:mx-16">
        <span>
          <Io.IoLogoWhatsapp
            className="text-green-500 bg-white rounded-lg outline-white"
            size={39}
          />
        </span>
        <h3 className="text-white ml-3.5 font-display">WHATSAPP WEB CLONE</h3>
      </div>
      <div className="h-fit-content px-10 py-12 relative bg-white drop-shadow shadow-gray-500 rounded-lg my-4 lg:my-7 mx-auto w-[80%] lg:w-1/3">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
