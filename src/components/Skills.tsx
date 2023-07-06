import React from "react";
import classNames from "classnames";
import "../styles/Skills.css"

function Skills() {

  const background = classNames('skills-background');
  const title = classNames('title');
  const container = classNames('skills-container');

  const row = classNames('row');
  const skillBoxGreen = classNames('skill-box-green');
  const skillBoxGrey = classNames('skill-box-grey');
  const skillIconsRow = classNames('skill-icons-row');
  const skillStamp = classNames('skill-stamp');


  return (
    <div className={background}>
      <h1 className={title}>My Technical Skills</h1>
      <div className={container}>

        <div className={row}>
          {/* Languages */}
          <div className={skillBoxGreen}>
            <h2>Languages</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/js.png'></img>
                <h5>JavaScript</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/typescript.png'></img>
                <h5>TypeScript</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/html.png'></img>
                <h5>HTML</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/css.png'></img>
                <h5>CSS</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/ruby.png'></img>
                <h5>Ruby</h5>
              </div>
            </div>
          </div>

          {/* Frameworks/Libraries/Environments */}
          <div className={skillBoxGrey}>
            <h2>Frameworks/Libraries/Environments</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/react.png'></img>
                <h5>React</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/express.png'></img>
                <h5>Express</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/node.png'></img>
                <h5>NodeJS</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/Rails.png'></img>
                <h5>Rails</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/bootstrap.png'></img>
                <h5>Bootstrap</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/jquery.png'></img>
                <h5>jQuery</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/sass.png'></img>
                <h5>SASS</h5>
              </div>
            </div>
          </div>
        </div>



        <div className={row}>
          {/* Systems/Databases */}
          <div className={skillBoxGrey}>
            <h2>Systems/Databases</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/git.png'></img>
                <h5>Git</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/sql.png'></img>
                <h5>SQL</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/postgres.png'></img>
                <h5>Postgres</h5>
              </div>
            </div>
          </div>

          {/* Testing */}
          <div className={skillBoxGreen}>
            <h2>Testing</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/mocha.png'></img>
                <h5>Mocha</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/chai.png'></img>
                <h5>Chai</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/cypress.png'></img>
                <h5>Cypress</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/storybook.png'></img>
                <h5>Storybook</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/jest.png'></img>
                <h5>Jest</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/rspec.png'></img>
                <h5>RSpec</h5>
              </div>
            </div>
          </div>
        </div>

        <div className={row}>
          {/* Tools */}
          <div className={skillBoxGreen}>
            <h2>Tools</h2>
            <div className={skillIconsRow}>
              <div className={skillStamp}>
                <img src='icons/figma.png'></img>
                <h5>Figma</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/postman.png'></img>
                <h5>Postman</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/chartjs.png'></img>
                <h5>Chart.js</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/photoshop.png'></img>
                <h5>Photoshop</h5>
              </div>
              <div className={skillStamp}>
                <img src='icons/illustrator.png'></img>
                <h5>Illustrator</h5>
              </div>
            </div>
          </div>
        </div>
      </div> {/* Container */}

    </div>  // Background

  )
}

export default Skills;