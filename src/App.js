import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Partner from './Components/Partner/Partner';
import Footer from './Components/Footer';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
   <div className="App">
   <Header/>
     <Switch>
       <Route component={Home} exact path="/"/>
       <Route component={About} path="/about"/>
       <Route component={Partner} path="/partners"/>
     </Switch>
     <Footer/>
   </div>
  );
}

export default App;
