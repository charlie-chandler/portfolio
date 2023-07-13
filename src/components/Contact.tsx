import React from "react";
import classNames from "classnames";
import "../styles/Contact.css";

function Contact() {

  const background = classNames('contact-background');
  const title = classNames('title');
  const mainContainer = classNames('contact-container');
  const leftContainer = classNames('left-container');
  const rightContainer = classNames('right-container');

  const callToAction = classNames('call-to-action');
  const contactList = classNames('contact-list');
  const contactListItem = classNames('contact-list-item');


  return (
    <div className={background}>
      <h1 className={title}>Contact</h1>
      <div className={mainContainer}>
        <div className={leftContainer}>
          <div className={callToAction}>
            <p>
            If you consider me a good candidate for an <span>open position</span>, or you'd like to discuss a freelance project, or even just want to <span>say hello</span>, contact me on LinkedIn, or send me a email!
            </p>
          </div>
          <ul className={contactList}>
            <li className={contactListItem}>
              <img src='icons/email.png' alt="email logo"></img>
              <h5>charlesmjchandler@gmail.com</h5>
            </li>
            <li className={contactListItem}>
              <img src='icons/pin.png' alt="location pin"></img>
              <h5>Vancouver, BC</h5>
            </li>
            <li className={contactListItem}>
              <img src='icons/linkedin.png' alt="linkedin logo"></img>
              <h5>charlesmchandler</h5>
            </li>
            <li className={contactListItem}>
              <img src='icons/github.png' alt="github logo"></img>
              <h5>charlie-chandler</h5>
            </li>
            <li className={contactListItem}>
              <img src='icons/medium.png' alt="medium logo"></img>
              <h5>cmchandler</h5>
            </li>
          </ul>
        </div>
        <div className={rightContainer}>
          <img src="images/dev-gif.gif" alt="developer working gif"/>
        </div>
      </div>
    </div>
  )
}


export default Contact;