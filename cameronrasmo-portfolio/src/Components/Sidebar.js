import React from "react";
import MenuIcon from "./MenuIcon";

function Sidebar(props) {
    const [clicked, setClicked] = React.useState();
    function menuClicked() {
        setClicked(clicked === "clicked" ? "" : "clicked");
    }
    function optionClicked(e) {
        props.scroll(e);
        menuClicked();
    }
    return (
        <div className={clicked}>
            <MenuIcon clicked={clicked} onClick={menuClicked} />
            <div id='sidebar-container'>
                <div id='sidebar-header'>
                    <img src='./img/logo-header.png' alt='logo-header' />
                </div>
                <ul id='sidebar-link-container'>
                    <li
                        onClick={optionClicked}
                        className='link'
                        name='projects'
                        id='projects'
                    >
                        <div className='link-text' id='projects'>
                            projects
                        </div>
                        <hr className='link-selector' />
                    </li>
                    <li
                        onClick={optionClicked}
                        className='link'
                        name='about'
                        id='about'
                    >
                        <div className='link-text' id='about'>
                            about
                        </div>
                        <hr className='link-selector' />
                    </li>
                    <li
                        onClick={optionClicked}
                        className='link'
                        name='contact'
                        id='contact'
                    >
                        <div className='link-text' id='contact'>
                            contact
                        </div>
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
