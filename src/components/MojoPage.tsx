import React from "react";
import ProjectPage from "./ProjectPage";


const MojoPage: React.FC = () => {
  return (
    <>
    <ProjectPage
       projectTitle="Mojo"
       projectSubtitle="Wellness web app" 
       stack={["JavaScript", "React", "Bootstrap", "Express", "Node.js", "SQL", "Jest", "Chartjs"]}
       features={["Record your emotions", "Write journal entries", "Customizable daily wellness checklist", "Calendar API for cataloguing entries", "Spotify playlist suggestions that compliment your mood", "Data analytics for mood over time"]}
       image1='images/project-reel/mojo_landing.gif'
       image2='images/project-reel/mojo_calendar.gif'
       image3='images/project-reel/mojo_moodscape.gif'
       repoLink="https://github.com/charlie-chandler/MoJo"
    />

  </>
  )
  
}

export default MojoPage;