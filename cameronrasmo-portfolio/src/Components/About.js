import React from "react";

function About() {
    const portraitRef = React.useRef();
    const kittenRef = React.useRef();

    function kittenHover() {
        portraitRef.current.style.top = "-100%";
        kittenRef.current.style.top = "-100%";
    }
    function kittenLeave() {
        portraitRef.current.style.top = "0%";
        kittenRef.current.style.top = "0%";
    }

    return (
        <div className='container project'>
            <div
                className='project-info'
                style={{ backgroundColor: "#7dffec" }}
            >
                <h1 className='project-title'>about me</h1>
                <h6 className='project-description'>
                    i’m a fullstack Javascript developer living in Salt Lake
                    City, Utah
                </h6>
                <br />
                <h6 className='project-description'>
                    when i’m not working with code, i’m producing music with
                    Ableton Live, brushing the knots out of my hair, and giving
                    <span>
                        {" "}
                        <span
                            onMouseEnter={kittenHover}
                            onMouseLeave={kittenLeave}
                            id='kitten'
                        >
                            my cute kitten
                        </span>{" "}
                    </span>
                    all the pets
                </h6>
            </div>
            <div className='next'>
                <img src='./img/arrow.png' alt='' />
                <p>contact</p>
            </div>
            <div className='project-image'>
                <img
                    id='portrait-image'
                    src='./img/project/portrait.png'
                    alt=''
                    ref={portraitRef}
                />
                <img
                    id='kitten-image'
                    src='./img/project/kitten.png'
                    alt=''
                    ref={kittenRef}
                />
            </div>
        </div>
    );
}

export default About;
