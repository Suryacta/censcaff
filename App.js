import React from 'react';
import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import cuplock from './cuplock';
import Adjustableprops from './Adjustableprops';
import Telescopicspan from './Telescopicspan';
import Centeringsheet from './Centeringsheet';



function App() {
  return (
  <BrowserRouter>
  <Switch>
   <Route component={HomeScreen} path='/' exact/>
    <Route component={cuplock} path='/Cuplock scaffolding'/>
     <Route component={Adjustableprops} path='/Adjustable props'/>
      <Route component={Telescopicspan} path='/Telescopic span'/>
      <Route component={Centeringsheet} path='/Centering sheet'/>
      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
