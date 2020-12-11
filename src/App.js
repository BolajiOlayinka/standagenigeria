import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
   <React.Fragment>
     <Switch>
       <Route component={Home} path="/"/>
     </Switch>
   </React.Fragment>
  );
}

export default App;
