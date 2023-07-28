import React from "react";
import ProjectPage from "./ProjectPage";


const MojoPage: React.FC = () => {
  return (
    <>
    <ProjectPage
       projectTitle="Mojo"
       projectSubtitle="Wellness web app" 
       stack={["JavaScript", "React", "Bootstrap", "Express", "Node.js", "SQL", "Jest"]}
       features={["Mood selector", "Journal", "Customizable daily wellness checklist", "Calendar API", "Spotify playlist suggestions that compliment your mood"]}
       image='images/project-reel/mojo_home.png'
       repoLink="https://github.com/charlie-chandler/MoJo"
    />
  </>
  )
  
}

export default MojoPage;