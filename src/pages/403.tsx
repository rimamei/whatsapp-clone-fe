import { Button } from '@components';
import { EmptyLayout } from '@layout';
import React from 'react';

const Custom403 = () => {
  return (
    <div className="text-center my-[50vh]">
      Signin first, go to <Button href="/signin" color="link">Signin Page</Button>
    </div>
  );
};

export default Custom403;

Custom403.Layout = EmptyLayout;
