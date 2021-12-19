/* eslint-disable */
import React from 'react';
import './styles/App.css';
import { Login } from './components/Login';
import { User } from './components/User';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from '../src/pages/Index';


function App() {
  return (
    <div className="App container mt-5">
      <Router>
        <Switch>
         
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/User'>
            <User />
          </Route>
          <Route path='/'>
            <Index />
          </Route>

        </Switch>
      </Router>
      {/* <Login /> */}
      {/* <User /> */}
    </div>
  );
}

export default App;
