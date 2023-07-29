import React from "react";
import ProjectPage from "./ProjectPage";


const SchedulerPage: React.FC = () => {
  return (
    <>
    <ProjectPage
       projectTitle="Scheduler"
       projectSubtitle="CRUD app for scheduling interviews" 
       stack={["JavaScript", "React", "SQL", "Ajax", "Node.js", "Cypress", "Storybook", "Jest"]}
       features={["Book, update, and cancel appointments", "Choose specific interviewers", "Search through the week's availability"]}
       image1='images/project-reel/scheduler_demo.gif'
       image2='images/project-reel/scheduler_edit.png'
       image3='images/project-reel/scheduler_new.png'
       challenge1="challenge1"
       challenge2="challenge2"
       goal1="goal1"
       goal2="goal2"
       repoLink="https://github.com/charlie-chandler/scheduler"
    />

  </>
  )
  
}

export default SchedulerPage;