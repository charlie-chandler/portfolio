import React from "react";
import classNames from "classnames";
import TopNav from "./TopNav";
import { Link } from "react-router-dom";


function MojoPage() {

  const background = classNames("mojo-background");
  const title = classNames('title');
  const subtitle = classNames('subtitle');
  const mojoContainer = classNames('mojo-container');
  const leftContainer = classNames('left-mojo');
  const rightContainer = classNames('right-mojo');
  const stack = classNames('stack');
  const featureList = classNames('feature-list');



  return (
    <>
      <TopNav />
      <div className={background}>
        <h1 className={title} id="skills">Mojo</h1>
        <h3 className={subtitle}>Mood Journal Web App</h3>
        <div className={mojoContainer}>
          <div className={leftContainer}>
            <div className={stack}></div>
            <div className={featureList}></div>
            <Link to="/#top"><button>Back to home</button></Link>
          </div>
          <div className={rightContainer}>
            <img src="src/assets/mojo_demo.gif" alt="mojo demo gif" />
            <a href="https://github.com/charlie-chandler/MoJo"><button>Repo</button></a>
          </div>

        </div>
      </div>
    </>
  );
}

export default MojoPage;