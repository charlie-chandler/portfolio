import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Attributes from './components/Attributes';


function App() {
  return (
    <div className="App">
      <TopNav/>
      <Introduction/>
      <Timeline/>
      <Attributes/>
      <p>
      Rest of the app container will go here
      </p>
    </div>
  );
}

export default App;
