import React from 'react';
import { LayoutProps } from '@services';

const EmptyLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default EmptyLayout;
