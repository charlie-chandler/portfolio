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
  image1: string;
  image2: string;
  image3: string;
  challenge1: string;
  challenge2: string;
  goal1: string;
  goal2: string;
  repoLink: string;
}
const ProjectPage: React.FC<ProjectPageProps> = ({
  projectTitle,
  projectSubtitle,
  stack,
  features,
  image1,
  image2,
  image3,
  challenge1,
  challenge2,
  goal1,
  goal2,
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
                const techWithoutPeriods = tech.replace(/\./g, '').toLowerCase();
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
            <img src={image1} alt="demo gif" />
            <Link to={repoLink} className="repo-button" target="_blank" rel="noopener noreferrer" >
              <button>View Repo</button>
            </Link>
          </div>
        </div>
      </div>
      <img src="images/wavy-graphic-2.png" alt="wavy graphic" className="project-page-border"/>
      <div className={lowerBackground}>
        <div className={writeupContainer}>
          <div className={challengesContainer}>
            <img src={image2} alt="demo gif" />
            <h1 className={title}>Challenges</h1>
            <p>{challenge1}
              <br /><br />
              {challenge2}
            </p>
          </div>
          <div className={goalContainer}>
            <h1 className={title}>Project Goal</h1>
            <p>{goal1}
              <br /><br />
              {goal2}
            </p>
            <img src={image3} alt="demo gif" />
          </div>
        </div>
        <Link to="/#top" className="home-button">
          <button>
            <div className={arrowIcon}>
              <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#FFFFFF", }} />
            </div>
            Home
          </button>
        </Link>
      </div >
    </>
  )
}

export default ProjectPage;