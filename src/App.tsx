import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ControlledForm from '@/components/form/Controlled/Controlled';
import Layout from '@/components/layout/Layout';
import './App.scss';
import Home from './components/home/Home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact={true} path="/" component={Home} />
        <Route path="/form" component={ControlledForm} />
      </Layout>
    </Router>
  );
};

export default App;
