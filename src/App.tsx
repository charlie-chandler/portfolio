import React from 'react';
import './App.css';

import TopNav from './components/home-page/TopNav';
import Introduction from './components/home-page/Introduction';
import Timeline from './components/home-page/Timeline';
import Attributes from './components/home-page/Attributes';
import Carousel from './components/home-page/Carousel';
import Skills from './components/home-page/Skills';
import Contact from './components/home-page/Contact';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Introduction />
      <Timeline />
      <Attributes />
      <Carousel />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
