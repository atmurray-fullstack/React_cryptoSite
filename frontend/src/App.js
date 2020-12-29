import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './views/Landing'
import LoginScreen from './views/LoginScreen'
import UserPage from './views/UserPage';




function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/login' component={LoginScreen} />        
      {/* <Route path='/register' component={Register} />
      <Route path='/saved' component={SavedCryptos} /> */}
      <Route path='/user' component={UserPage} /> 
      <Route path='/' component={Landing} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
