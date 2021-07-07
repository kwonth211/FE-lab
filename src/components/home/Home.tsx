import React from 'react';

export interface HomeProps {
  children?: React.ReactNode;
}

const Home = ({ children }: HomeProps) => {
  return <div>Hello world!</div>;
};
export default Home;
