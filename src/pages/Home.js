import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Disha</h2>
        <div className='prompt'> 
          <p>A software developer with a passion for learning and creating. </p>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://www.linkedin.com/in/disha-ukhlikar-7966a5222/" target="_blank"><LinkedInIcon /></a>
          <a href="mailto: @dishaukhlikar47@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/finding-disha"><GitHubIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span> ReactJs, HTML, CSS, Bootstrap, SASS, TailwindCSS, NPM, MaterialUI, StyledComponents, Yarn</span>
          </li>
          <li className='item'>
            <h2> Back-End </h2>
            <span> NodeJS, ExpressJS, MongoDB</span>
          </li>
          <li className='item'>
            <h2> Languages </h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;