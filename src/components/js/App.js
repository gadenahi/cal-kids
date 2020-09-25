import React, { useContext } from 'react';
import '../../static/App.css';
import Landing from '../js/Landing'
import Keys from '../js/Keys'
import { GlobalContext } from '../js/Global';


function App() {
  const { startState } = useContext(GlobalContext)
  
  if (startState) {
    return (
      <div className="App">
        <Keys />
      </div>
    );
  }
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
