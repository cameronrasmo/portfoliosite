import React from "react";

function ProjectSection(props) {
    return (
        <div className='container project' id={`project-container-${props.id}`}>
            <div
                className='project-info'
                style={{ backgroundColor: props.bgColor }}
            >
                <p className='project-made-with'>made with: {props.madewith}</p>
                <h1 className='project-title'>{props.name}</h1>
                <h6 className='project-description'>{props.description}</h6>
                <div className='project-buttons'>
                    <a
                        className='project-github'
                        href={props.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div>check out repo</div>
                        <img src='./img/github.png' alt='' />
                    </a>
                    <a
                        className='project-site'
                        href={props.siteUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div>check out site</div>
                    </a>
                </div>
            </div>
            <div className='next'>
                <img src='./img/arrow.png' alt='' />
                <p>{props.next}</p>
            </div>
            <div className='project-image'>
                <img src={props.imgUrl} alt='' />
            </div>
        </div>
    );
}

export default ProjectSection;
