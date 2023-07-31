import React from "react";
import ProjectPage from "./ProjectPage";


const SchedulerPage: React.FC = () => {
  return (
    <>
    <ProjectPage
       projectTitle="Scheduler"
       projectSubtitle="CRUD app for scheduling interviews" 
       stack={["JavaScript", "React", "SQL", "Express", "Node.js", "Cypress", "Storybook", "Jest"]}
       features={["Book, update, and cancel appointments", "Choose specific interviewers", "Search through the week's availability"]}
       image1='images/project-reel/scheduler_demo.gif'
       image2='images/project-reel/scheduler_edit.png'
       image3='images/project-reel/scheduler_new.png'
       challenge1="Stale states and shakey custom hooks caused a bit of a headache while building Scheduler."
       challenge2="This reinforced the importance of diligent management of states."
       goal1="The goal with Scheduler was to dive into building custom hooks, and focus on using Test-Driven Development to inform the progress of the app. "
       goal2="Using Storybook for the first time was a key tool, allowing me to test each component in isolation as I built them."
       repoLink="https://github.com/charlie-chandler/scheduler"
    />

  </>
  )
  
}

export default SchedulerPage;