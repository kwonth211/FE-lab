import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/form/Form';
import Todo from './components/todo/Todo';
import Layout from './components/layout/Layout';
import './App.scss';
import Home from './components/home/Home';
import Vanila from './components/vanila/index';
import StateManangement from './components/state-management';
import ReactDatetime from './components/react-datetime/ReactDatetime';

/* 
    1. HOME (게임 또는 interaction view)
    2. form Test
    3. state management
    4. vanlia JS
    5. memoization
    6. react-datetime

*/

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact={true} path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/todo" component={Todo} />
        <Route path="/vanila" component={Vanila} />
        <Route path="/stateManagement" component={StateManangement} />
        <Route path="/react-datetime" component={ReactDatetime} />
      </Layout>
    </Router>
  );
};

export default App;
