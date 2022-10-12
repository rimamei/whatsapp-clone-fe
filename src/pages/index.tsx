import { Chat, Sidebar, SidebarStatus } from '@components';
import { DefaultLayout, EmptyLayout, StatusLayout } from '@layout';
import React, { useState } from 'react';

const Home = () => {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <>
      {status ? (
        <StatusLayout>
          <div className="h-full flex flex-row">
            <SidebarStatus className="basis-1/4" />
            <div className="basis-3/4"></div>
          </div>
        </StatusLayout>
      ) : (
        <DefaultLayout>
          <div className="h-full flex flex-row">
            <Sidebar className="basis-1/3" />
            <Chat className="basis-2/3" />
          </div>
        </DefaultLayout>
      )}
    </>
  );
};

export default Home;

Home.Layout = EmptyLayout;
