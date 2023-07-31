import React from "react";
import ProjectPage from "./ProjectPage";


const JunglePage: React.FC = () => {
  return (
    <>
    <ProjectPage
       projectTitle="Jungle"
       projectSubtitle="E-commerce store for plant lovers" 
       stack={["Ruby", "Rails", "Bootstrap", "HTML", "CSS", "RSpec", "Cypress"]}
       features={["Add items to cart from several categories of plants", "User authentication with BCrypt", "Stripe integration at check-out", "Admin profile for adding/deleting product categories", "Order summaries with emailed receipt"]}
       image1='images/project-reel/jungle_home.png'
       image2='images/project-reel/jungle_home.gif'
       image3='images/project-reel/jungle_admin.gif'
       challenge1="My biggest challenge was wrapping my head around the MVC lifecycle and picking through ActiveRecord errors."
       challenge2="Although it was daunting to dive into a new language, this really taught me how to teach myself and research my way through a problem."
       goal1="Working on Jungle was the first time that I had coded using Ruby on Rails, so familiarizing myself with its principles, testing frameworks, and 'Ruby magic' was my primary goal."
       goal2="The second aim was to investigate how to integrate the Stripe and OAuth APIs since they are useful in a wide range of applications."
       repoLink="https://github.com/charlie-chandler/jungle"
    />

  </>
  )
  
}

export default JunglePage;