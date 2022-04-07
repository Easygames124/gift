import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProjectList.module.css';

const projects = [
    {
        title: "Погода",
        icon: "air",
        link: "weather"
    },
    {
        title: "Работа со временем",
        icon: "schedule",
        link: "time"
    }
];

const Projects = (props) => {
    return (
        <div className='row'>
            {projects.map((project, index) => 
                <div key={index} className={"col-xl-4 col-md-4 col-sm-12 " + classes.project}>
                    <Link to={project.link} className={classes.circle}>
                        <span className='material-icons'>{project.icon}</span>
                    </Link>
                    <Link to={project.link} className={`${classes.title} ${props.theme === "dark" ? classes.dark : ""}`}>
                        {project.title}
                        <div className={classes.line}/>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Projects;