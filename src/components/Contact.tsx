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
              <img src='icons/email.png'></img>
              <h5>charlesmjchandler@gmail.com</h5>
            </li>
          </ul>

        </div>
        <div className={rightContainer}></div>
      </div>
    </div>
  )
}


export default Contact;