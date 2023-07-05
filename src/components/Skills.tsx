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

        </div>

        <div className={row}>

        </div>
      </div>

    </div>
  )
}

export default Skills;