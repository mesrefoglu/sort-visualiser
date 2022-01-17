import React from 'react';
import logo from '../media/logo256.png'
import "./App.css"

function App(){
  return(
    <div className="App">
      <div className="Toolbar">
        <img className="Logo" src={logo} alt="logo" />
        <div className="ToolbarText">Hi</div>
      </div>
    </div>
  );
}

export default App;
