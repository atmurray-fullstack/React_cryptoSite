import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './views/Landing';
import LoginScreen from './views/LoginScreen';
import UserPage from './views/UserPage';
import ListPage from './views/ListPage';




function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/login' component={LoginScreen} />        
      {/* <Route path='/register' component={Register} />
      <Route path='/saved' component={SavedCryptos} /> */}
      <Route path='/user' component={UserPage} /> 
      <Route path='/list' component={ListPage} /> 
      <Route path='/' component={Landing} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
