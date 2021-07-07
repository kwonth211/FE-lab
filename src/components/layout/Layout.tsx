import React from 'react';
import './Layout.scss';
import Header from '@/components/layout/Header';
export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className={'main'}>{children}</div>
    </div>
  );
};

export default Layout;
