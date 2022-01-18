import React from 'react';
import Toolbar from '../components/toolbar/toolbar/Toolbar'
import Holder from '../components/body/holder/Holder'
import "./App.css"

function App(){
  return(
    <div className="App">
      <Toolbar />
      <Holder />
    </div>
  );
}

export default App;
