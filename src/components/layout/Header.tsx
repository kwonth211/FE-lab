import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export interface HeaderProps {
  children?: React.ReactNode;
}

const Header = () => {
  return (
    <header>
      <Link to="/">Main</Link>
      <Link to="/form">Form</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/stateManagement">State management</Link>
      <Link to="/react-datetime">React datetime</Link>
      <Link to="/hook-design">Hook Design</Link>
    </header>
  );
};
export default Header;
