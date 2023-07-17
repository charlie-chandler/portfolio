import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Attributes from './components/Attributes';
import Carousel from './components/Carousel';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Introduction/>
      <Timeline/>
      <Attributes/>
      <Carousel/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
