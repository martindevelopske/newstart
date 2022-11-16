import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeConsumer } from 'styled-components'
import { ProjectsData } from '../Data/ProjectsData'
import { StyledCardButton } from '../Styled/StyledCardButton'
import { ProjectCard, StyledProjectsMain } from '../Styled/StyledProjectsSection'
import { StyledSectionHeader, StyledSkillSectionHeader } from '../Styled/StyledSectionHeader'

function ProjectsSection() {
  return (
    <>
    
    <StyledProjectsMain>
    <StyledSectionHeader>
        Here are some of my <div>Projects:</div>
    </StyledSectionHeader>
    <div className='holder'>
    {ProjectsData.map((item)=>{
        return(
          <ProjectCard key={item.id}>
        <img src={item.img} alt=''></img>
       
        {/* array that should map throught the stack*/}
        <br></br>
        <div>
            stack:
            {item.stack.map((stack,i)=>{
              return (<h6 key={i}>
                {stack}
              </h6>
    )})}
          </div>
        <a href={item.link}>
        <StyledCardButton bg={p=>p.theme.colorPrimary}>Visit site<i class="fa-solid fa-up-right-from-square"></i></StyledCardButton>
        </a>
        <a href={item.github}>
        <StyledCardButton bg="none" color="black"> Github <i class="fa-brands fa-github"></i></StyledCardButton>
        </a>
      </ProjectCard>
        )
      })}
    </div> 

      {/* //  <div>
      //     {ProjectsData.map((item)=>{
      //       return <div key={item.id}>
      //         <h2>project</h2>
      //         {item.stack.map((stack,i)=>{
      //           <span key={i}>
      //             {stack}
      //             <h3>prr</h3>
      //             </span>
      //         })}
      //       </div> */}
          {/* })}
        </div> */}
    </StyledProjectsMain>
    </>
  )
}

export default ProjectsSection