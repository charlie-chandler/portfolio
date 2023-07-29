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
       challenge1="This project used several API intergrations to make it work, so our team's biggest challenge was understanding external libraries and version compatibility wit React."
       challenge2="We were able to overcome this with a large amount of research and pair programming through the toughest problems."
       goal1="To create a wellness app to check in with your mood and daily actions through journal, building awareness of your actions, and data. By way of the Spotify API, Mojo will also make a playlist recommendation for music that compliments your current mood."
       goal2="The app has gentle aesthetic features, blurred gradients, and soft lines to create a harmonious experience for the user."
       repoLink="https://github.com/charlie-chandler/MoJo"
    />

  </>
  )
  
}

export default MojoPage;