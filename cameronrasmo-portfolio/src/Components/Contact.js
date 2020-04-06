import React from "react";

function Contact() {
  return (
    <div id='contact-container' className='container'>
      <div id='contact-section'>
        <h1>contact</h1>
        <div className='contact-link'>
          <a
            href='https://www.linkedin.com/in/cameronrasmo/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div>
              <img src='./img/linkedin.png' alt='' />
              linkedin.com/in/cameronrasmo
            </div>
          </a>
        </div>
        <div className='contact-link'>
          <a
            href='https://www.github.com/cameronrasmo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div>
              <img src='./img/github.png' alt='' />
              github.com/cameronrasmo
            </div>
          </a>
        </div>
        <div className='contact-link'>
          <a href='mailto:cameronrasmo@gmail.com'>
            <div>
              <img src='./img/email.png' alt='' />
              cameronrasmo@gmail.com
            </div>
          </a>
        </div>
        <div className='contact-link'></div>
        <div className='contact-link'></div>
      </div>
    </div>
  );
}

export default Contact;
