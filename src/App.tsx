import React from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


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
      <TopNav />
      <Parallax pages={5}>
        <ParallaxLayer
        offset={0}
        speed={1}
        factor={0}
        sticky={{ start: 0}}
        style={{
          backgroundImage: ``,
          backgroundSize: 'cover',
        }}>
          <Introduction />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={2}
          style={{
            backgroundImage: ``,
            backgroundSize: 'cover',
          }}>
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer
        offset={2}
        speed={1}
        factor={2}
        style={{
          backgroundImage: ``,
          backgroundSize: 'cover',
        }}>
          <Attributes />
        </ParallaxLayer>

        <ParallaxLayer
        offset={3}
        speed={1}
        factor={2}
        style={{
          backgroundImage: ``,
          backgroundSize: 'cover',
        }}>
          <Carousel />
        </ParallaxLayer>

        <ParallaxLayer
        offset={4}
        speed={1}
        factor={2}
        style={{
          backgroundImage: ``,
          backgroundSize: 'cover',
        }}>
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.5}
          factor={3}
          style={{
            backgroundImage: '/images/green_blob',
            backgroundSize: 'cover',
          }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
