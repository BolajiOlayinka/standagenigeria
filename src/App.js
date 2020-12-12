import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
   <div className="App">
     <Switch>
       <Route component={Home} path="/"/>
     </Switch>
   </div>
  );
}

export default App;
