import React from 'react';

export interface HomeProps {
  children?: React.ReactNode;
}

const Home = ({ children }: HomeProps) => {
  return <div>Welcome to FE laboratory!</div>;
};
export default Home;
