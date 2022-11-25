import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeConsumer } from 'styled-components'
import { ProjectsData } from '../Data/ProjectsData'
import { StyledCardButton } from '../Styled/StyledCardButton'
import { ProjectCard, StyledProjectsMain, StyledStackHolder, StyledStackIcon } from '../Styled/StyledProjectsSection'
import { StyledSectionHeader, StyledSkillSectionHeader } from '../Styled/StyledSectionHeader'
import Roll from 'react-reveal/Roll';
import { ServicesIntro } from '../Styled/StyledServicesSection'
function ProjectsSection() {
  return (
    <>
    
    <StyledProjectsMain>
    <StyledSectionHeader>
        Here are some of my <div>Projects:</div>
    </StyledSectionHeader>
    <ServicesIntro>
      Over the past two years as a developer, I've done so many projects during my learning process. Here are some few outstanding projects that you can view:
    </ServicesIntro>
    <div className='holder'>
    {ProjectsData.map((item)=>{
        return(
          
                  <ProjectCard key={item.id}>
        <img src={item.img} alt='' className='image'></img>
       
       
        <br></br>
        <p>{item.name}</p>
        stack:
        <StyledStackHolder>
            {item.stack.map((stack,i)=>{
              return (
                  <StyledStackIcon src={stack} alt=''></StyledStackIcon>
               
    )})}
          </StyledStackHolder>
        <a href={item.link} target=".blank">
        <StyledCardButton bg={p=>p.theme.colorPrimary}>Visit site<i class="fa-solid fa-up-right-from-square"></i></StyledCardButton>
        </a>
        <a href={item.github} target=".blank">
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