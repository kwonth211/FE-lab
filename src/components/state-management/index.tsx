import React from 'react';
import ContextAPI from './Context';

export interface indexProps {
  children?: React.ReactNode;
}

const index = ({ children }: indexProps) => {
  return (
    <div>
      <div>
        Use Context API
        <ContextAPI />
      </div>
    </div>
  );
};

export default index;
