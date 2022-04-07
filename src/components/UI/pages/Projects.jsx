import React from 'react';
import ProjectList from '../ProjectList/ProjectList';

const Projects = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center text-uppercase blue'>Проекты</h1>
            <h2 className='text-center text-uppercase green mt-5 mb-5'>Полезное</h2>
            <ProjectList theme={props.theme}/>
            <h2 data-title="Игры доступны только для пользователей ПК." className='text-center text-uppercase green mt-5 mb-5'>Игры</h2>
        </div>
    );
};

export default Projects;