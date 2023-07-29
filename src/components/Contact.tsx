import React, { useEffect } from "react";
import classNames from "classnames";
import "../styles/Contact.css";

function Contact() {

  const background = classNames('contact-background');
  const title = classNames('contact-title');
  const mainContainer = classNames('contact-container');
  const leftContact = classNames('left-contact');
  const rightContact = classNames('right-contact');

  const callToAction = classNames('call-to-action');
  const contactList = classNames('contact-list');
  const contactListItem = classNames('contact-list-item');
  const wavyGraphic = classNames('wavy-graphic');
  const footer = classNames('footer');

  // Check if element is in view
  useEffect(() => {
    // Function to check if an element is in the viewport
    const isInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Function to handle the scroll event
    const handleScroll = () => {
      const element = document.querySelector(".left-contact") as HTMLElement;
      if (element && isInViewport(element)) {
        element.classList.add("slide-in-left");
        console.log("Animation triggered!");
      }
    };
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={background}>
      <img src="images/wavy-graphic-2.png" alt="wavy border" className={wavyGraphic} />
      <h1 className={title} id="contact">Want to work together?</h1>
      <div className={mainContainer}>
        <div className={leftContact}>
          <div className={callToAction}>
            <p>
              If you consider me a good candidate for an <span>open position</span>, or you'd like to discuss a freelance project, or even just want to <span>say hello</span>, contact me on LinkedIn, or send me a email!
            </p>
          </div>
          <ul className={contactList}>
            <li className={contactListItem}>
              <a href="mailto:charlesmjchandler@gmail.com?subject=Nice to meet you!&amp;body=Hi Charlie,"><img src="icons/email.png" alt="email icon"></img></a>
              <h5>charlesmjchandler@gmail.com</h5>
            </li>
            <li className={contactListItem}>
              <img src='icons/pin.png' alt="location pin"></img>
              <h5>Vancouver, BC</h5>
            </li>
            <li className={contactListItem}>
              <a href="https://www.linkedin.com/in/charlesmchandler/" target="_blank" rel="noreferrer"><img src="icons/linkedin.png" alt="linkedin icon"></img></a>
              <h5>charlesmchandler</h5>
            </li>
            <li className={contactListItem}>
              <a href="https://github.com/charlie-chandler" target="_blank" rel="noreferrer"><img src="icons/github.png" alt="github icon"></img></a>
              <h5>charlie-chandler</h5>
            </li>
            <li className={contactListItem}>
              <a href="https://https://medium.com/@cmchandler" target="_blank" rel="noreferrer"><img src="icons/medium.png" alt="medium icon"></img></a>
              <h5>cmchandler</h5>
            </li>
          </ul>
        </div>
        <div className={rightContact}>
          <img src="images/dev-gif.gif" alt="developer working gif" />
        </div>
      </div>
      <div className={footer}>
        <h3>© Charlie Chandler 2023</h3><h3>Made with 💛 in Vancouver, BC</h3>
      </div>
    </div>
  )
}


export default Contact;