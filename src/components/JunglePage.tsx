import React from "react";
import ProjectPage from "./ProjectPage";


const JunglePage: React.FC = () => {
  return (
    <>
    <ProjectPage
       projectTitle="Jungle"
       projectSubtitle="E-commerce store for plant lovers" 
       stack={["Ruby", "Rails", "Bootstrap", "RSpec", "Cypress"]}
       features={["Add items to cart from several categories of plants", "User authentication with BCrypt", "Stripe integration at check-out", "Admin profile for adding/deleting product categories", "Order summaries with emailed receipt"]}
       image1='images/project-reel/jungle_home.png'
       image2='images/project-reel/jungle_home.gif'
       image3='images/project-reel/jungle_admin.gif'
       challenge1="challenge1"
       challenge2="challenge2"
       goal1="goal1"
       goal2="goal2"
       repoLink="https://github.com/charlie-chandler/jungle"
    />

  </>
  )
  
}

export default JunglePage;