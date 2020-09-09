import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Landing from './views/Landing'




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} />
        {/* <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={Register} />
      <Route path='/saved' component={SavedCryptos} />
      <Route path='/home' component={Home} /> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
