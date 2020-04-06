import React from "react";
import MenuIcon from "./MenuIcon";

function Sidebar() {
  const [clicked, setClicked] = React.useState("");
  function menuClicked() {
    setClicked(clicked === "clicked" ? "" : "clicked");
  }

  return (
    <div className={clicked}>
      <MenuIcon clicked={clicked} onClick={menuClicked} />
      <div id='sidebar-container'>
        <div id='sidebar-header'>
          <img src='./img/logo-header.png' alt='logo-header' />
        </div>
        <ul id='sidebar-link-container'>
          <li className='link'>
            <div className='link-text'>projects</div>
            <hr className='link-selector' />
          </li>
          <li className='link'>
            <div className='link-text'>about</div>
            <hr className='link-selector' />
          </li>
          <li className='link'>
            <div className='link-text'>contact</div>
            <hr className='link-selector' />
          </li>
        </ul>
        <div id='sidebar-socials'>
          <a
            id='linkedin'
            href='https://www.linkedin.com/in/cameronrasmo/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='./img/linkedin.png' alt='LinkedIn' />
          </a>
          <a
            id='github'
            href='https://www.github.com/cameronrasmo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='./img/github.png' alt='github' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
