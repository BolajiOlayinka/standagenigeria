import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
   <div className="App">
     <Switch>
       <Route component={Home} path="/"/>
     </Switch>
     <Footer/>
   </div>
  );
}

export default App;
