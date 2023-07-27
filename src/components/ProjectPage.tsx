import React from "react";
import classNames from "classnames";
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
  const leftContainer = classNames('left-project-container');
  const rightContainer = classNames('right-project-container');
  const stackList = classNames('stack-list');
  const featureList = classNames('feature-list');


  return (
    <>
      <TopNav />
      <div className={upperBackground}>
        <h1 className={title}>{projectTitle}</h1>
        <h3 className={subtitle}>{projectSubtitle}</h3>
        <div className={projectContainer}>
          <div className={leftContainer}>
            <div className={stackList}>{stack}</div>

            <ul className={featureList}>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <Link to="/#top"><button>Back to home</button></Link>
          </div>
          <div className={rightContainer}>
            <img src='images/project-reel/mojo_home.png' alt="demo gif" />
            <a href={repoLink} target="_blank" rel="noopener noreferrer"><button>View Repo</button></a>
          </div>
        </div>
      </div>

      <div className={lowerBackground}>

      </div >
    </>
  )
}

export default ProjectPage;