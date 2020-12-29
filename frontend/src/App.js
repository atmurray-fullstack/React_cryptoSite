import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './views/Landing'
import LoginScreen from './views/LoginScreen'




function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/login' component={LoginScreen} />
        <Route path='/' component={Landing} />
        
        {/* <Route path='/register' component={Register} />
      <Route path='/saved' component={SavedCryptos} />
      <Route path='/home' component={Home} />  */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
