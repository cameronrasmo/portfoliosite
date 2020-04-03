import React from "react";

function WelcomeSection() {
  return (
    <div id='welcome-container'>
      <div id='welcome-description'>
        <p>
          {`{`}
          <br />
          {"design driven,"}
          <br />
          {"user oriented,"}
          <br />
          {"collaborative,"}
          <br />
          {`}`}
        </p>
      </div>
      <div id='welcome-greeting'>
        <h1>hello, i'm cameron</h1>
        <div id='welcome-color-span'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h4>{`( cameron rasmussen )`}</h4>
      </div>
      <div id='welcome-cta'>
        <img src='./img/arrow.png' alt='' />
        <p>check out some stuff i've made</p>
      </div>
      <img id='welcome-logo' src='./img/logo-header.png' alt='' />
    </div>
  );
}

export default WelcomeSection;
