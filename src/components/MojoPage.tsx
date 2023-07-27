import React from "react";
import classNames from "classnames";
import TopNav from "./TopNav";
import { Link } from "react-router-dom";
import ProjectPage from "./ProjectPage";


const MojoPage: React.FC = () => {
  return (
    <>
    <ProjectPage
       projectTitle="Mojo"
       projectSubtitle="Wellness web app" 
       stack={["JavaScript, React, Node.js"]}
       features={["Mood selector", "Journal", "Customizable daily wellness checklist", "Calendar API", "Spotify playlist suggestions that compliment your mood"]}
       image="src/assets/mojo_demo.gif"
       repoLink="https://github.com/charlie-chandler/MoJo"
    />
  </>
  )
  
}

export default MojoPage;