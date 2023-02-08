/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'> 
      <h1> { project.name }</h1>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={project.url} target="_blank">
        <img src={project.image} />
      </a> 
      <p>
        <b>Skills: </b>{project.skill}
      </p>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={project.url} target="_blank"> <GitHubIcon /></a>
     
    </div>
  )
}

export default ProjectDisplay;