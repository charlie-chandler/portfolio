import React, { useEffect } from "react";
import classNames from "classnames";
import Tilty from 'react-tilty';

import "../../styles/Skills.css";

function Skills() {

  const background = classNames('skills-background');
  const title = classNames('title');
  const container = classNames('skills-container');

  const row = classNames('row');
  const skillBoxGreen = classNames('skill-box-green');
  const skillBoxGrey = classNames('skill-box-grey');
  const skillIconsRow = classNames('skill-icons-row');
  const skillStamp = classNames('skill-stamp');
  const tilty = classNames('tilty');


  return (
    <div className={background}>
      <h1 className={title} id="skills">My Technical Skills</h1>
      <div className={container}>

        <div className={row}>
          {/* Languages */}
          <Tilty className={tilty}>
          <div className={skillBoxGreen}>
            <h2>Languages</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/js.png' alt="javascript icon"></img>
                <h5>JavaScript</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/typescript.png' alt="typescript icon"></img>
                <h5>TypeScript</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/html.png' alt="html icon"></img>
                <h5>HTML</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/css.png' alt="css icon"></img>
                <h5>CSS</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/ruby.png' alt="ruby icon"></img>
                <h5>Ruby</h5>
              </div>
            </div>
          </div>
          </Tilty>

          {/* Frameworks/Libraries/Environments */}
          <Tilty>
          <div className={skillBoxGrey}>
            <h2>Frameworks/Libraries/Environments</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/react.png' alt="react icon"></img>
                <h5>React</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/express.png' alt="express icon"></img>
                <h5>Express</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/node.png' alt="node icon"></img>
                <h5>NodeJS</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/Rails.png' alt="rails icon"></img>
                <h5>Rails</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/bootstrap.png' alt="bootstrap icon"></img>
                <h5>Bootstrap</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/jquery.png' alt="jquery icon"></img>
                <h5>jQuery</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/sass.png' alt="sass icon"></img>
                <h5>SASS</h5>
              </div>
            </div>
          </div>
        </Tilty>
        </div>


        <div className={row}>
          {/* Systems/Databases */}
          <Tilty className={tilty}>
          <div className={skillBoxGrey}>
            <h2>Systems/Databases</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/git.png' alt="git icon"></img>
                <h5>Git</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/sql_white.png' alt="sql icon"></img>
                <h5>SQL</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/postgres.png' alt="postgres icon"></img>
                <h5>Postgres</h5>
              </div>
            </div>
          </div>
          </Tilty>


          {/* Testing */}
          <Tilty>
          <div className={skillBoxGreen}>
            <h2>Testing</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/mocha.png' alt="mocha icon"></img>
                <h5>Mocha</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/chai.png' alt="chai icon"></img>
                <h5>Chai</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/cypress.png' alt="cypress icon"></img>
                <h5>Cypress</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/storybook.png' alt="storybook icon"></img>
                <h5>Storybook</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/jest.png' alt="jest icon"></img>
                <h5>Jest</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/rspec.png' alt="rspec icon"></img>
                <h5>RSpec</h5>
              </div>
            </div>
          </div>
          </Tilty>

        </div>

        <div className={row}>
          {/* Tools */}
          <Tilty>
          <div className={skillBoxGreen}>
            <h2>Tools</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/figma.png' alt="figma icon"></img>
                <h5>Figma</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/postman.png' alt="postman icon"></img>
                <h5>Postman</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/chartjs.png' alt="chart.js icon"></img>
                <h5>Chart.js</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/photoshop.png' alt="photoshop icon"></img>
                <h5>Photoshop</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/illustrator.png' alt="illustrator icon"></img>
                <h5>Illustrator</h5>
              </div>
            </div>
          </div>
          </Tilty>

        </div>
      </div> {/* Container */}

    </div>  // Background

  )
}

export default Skills;