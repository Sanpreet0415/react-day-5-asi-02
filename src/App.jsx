import React from 'react';
import './App.css';
import TimerComponent from './components/TimerComponent';
import ScrollEventHandler from './components/ScrollEventHandler';

function App() {
  return (
    <div className="App">
      <h1>React useEffect with Cleanup Functions</h1>
      <TimerComponent />
      <ScrollEventHandler />
    </div>
  );
}

export default App;
