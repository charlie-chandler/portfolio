import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import TopNav from "./TopNav";
import { Link } from "react-router-dom";
import "../styles/ProjectPage.css";


interface ProjectPageProps {
  projectTitle: string;
  projectSubtitle: string;
  stack: string[];
  features: string[];
  image: string;
  repoLink: string;
}
const ProjectPage: React.FC<ProjectPageProps> = ({
  projectTitle,
  projectSubtitle,
  stack,
  features,
  image,
  repoLink,
}) => {

  const upperBackground = classNames("upper-background");
  const lowerBackground = classNames("lower-background");
  const title = classNames('project-title');
  const subtitle = classNames('subtitle');

  const projectContainer = classNames('project-container');
  const leftProjContainer = classNames('left-project-container');
  const rightProjContainer = classNames('right-project-container');

  const stackList = classNames('stack-list');
  const featureList = classNames('feature-list');
  const arrowIcon = classNames('arrow-icon');
  const skillStamp = classNames('skill-stamp');

  const writeupContainer = classNames('writeup-container');
  const challengesContainer = classNames('challenges-container');
  const goalContainer = classNames('goal-container');

  return (
    <>
      <TopNav />
      <div className={upperBackground}>
        <h1 className={title}>{projectTitle}</h1>
        <h3 className={subtitle}>{projectSubtitle}</h3>
        <div className={projectContainer}>
          <div className={leftProjContainer}>

            <div className={stackList}>
              {stack.map((tech) => {
                const techWithoutPeriods = tech.replace(/\./g, '');
                return (
                  <div className={skillStamp}>
                    <img src={`icons/${techWithoutPeriods}.png`} alt={`${techWithoutPeriods} icon`}></img>
                    <h5>{tech}</h5>
                  </div>
                );
              })}
            </div>
            <ul className={featureList}>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Link to="/#top" className="home-button">
              <button>
                <div className={arrowIcon}>
                  <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000", }} />
                </div>
                Home
              </button>
            </Link>
          </div>

          <div className={rightProjContainer}>
            <img src={image} alt="demo gif" />
            <Link to={repoLink} className="repo-button" target="_blank" rel="noopener noreferrer" >
              <button>View Repo</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={lowerBackground}>
        <div className={writeupContainer}>
          <div className={challengesContainer}>
            <img src={image} alt="demo gif" />
            <h1 className={title}>Challenges</h1>
            <p>This project used several API intergrations to make it work, so our team's biggest challenge was understanding external libraries and version compatibility wit React.
              <br /><br />
              We were able to overcome this with a large amount of research and pair programming through the toughest problems.
            </p>
          </div>
          <div className={goalContainer}>
            <h1 className={title}>Project Goal</h1>
            <p>This project used several API intergrations to make it work, so our team's biggest challenge was understanding external libraries and version compatibility wit React.
              <br /><br />
              We were able to overcome this with a large amount of research and pair programming through the toughest problems.
            </p>
            <img src={image} alt="demo gif" />
          </div>
        </div>
        <Link to="/#top" className="home-button">
          <button>
            <div className={arrowIcon}>
              <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000", }} />
            </div>
            Home
          </button>
        </Link>
      </div >
    </>
  )
}

export default ProjectPage;