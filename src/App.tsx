import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Introduction/>
      <p>
      Rest of the app container will go here
      </p>
    </div>
  );
}

export default App;
