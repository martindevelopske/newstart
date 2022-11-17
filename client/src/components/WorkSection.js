import React from 'react'
import { StyledSectionHeader } from '../Styled/StyledSectionHeader'
import { ServicesIntro } from '../Styled/StyledServicesSection'
import { WorkCard, WorkCards, WorkImage, WorkMain } from '../Styled/StyledWorkSection'
import {FiSearch} from 'react-icons/fi'
import SkillSection from './SkillSection'
import CardButton from './CardButton'
import { StyledCardButton } from '../Styled/StyledCardButton'
import {Link} from 'react-scroll'
function WorkSection() {
  return (
    <WorkMain id='work'>
    <StyledSectionHeader>
        Check out my <div>Work</div>
    </StyledSectionHeader>
    <ServicesIntro>
        I help businesses grow by crafting amazing websites and web experiences. If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat.
        </ServicesIntro>
    <WorkCards>
        <WorkCard>
          <WorkImage>
          <div><a className="search" href="https://google.com" target="-blank"><FiSearch /></a></div>
            <img src="./Images/pp1.jpg" alt='pic'></img>
          </WorkImage>
          <p>company name</p>
          
          <a href='http://google.com' target="blank">
          <StyledCardButton bg={(p)=>p.theme.colorPrimary}>
            visit site <i className="fa-solid fa-up-right-from-square"></i>
          </StyledCardButton>
          </a>         
        </WorkCard>
        <WorkCard>
        <WorkImage>
        <div><a className="search" href="https://google.com" target="-blank"><FiSearch /></a></div>
        <img src="./Images/pp1.jpg" alt='pic'></img>
        </WorkImage>
          <p>company name</p>
          
          <a href='http://google.com' target="blank">
          
          <StyledCardButton bg={(p)=>p.theme.colorPrimary}>
            visit site <i className="fa-solid fa-up-right-from-square"></i>
          </StyledCardButton>
          </a>
        </WorkCard>
        <WorkCard>
        <WorkImage>
        <div><a className="search" href="https://google.com" target="-blank"><FiSearch /></a></div>
        <img src="./Images/pp1.jpg" alt='pic'></img>
        </WorkImage>
          <p>company name</p>
         :
          <a href='http://google.com' target="blank">
          <StyledCardButton bg={(p)=>p.theme.colorPrimary}>
            
            visit site <i className="fa-solid fa-up-right-from-square"></i>
          </StyledCardButton>   
          </a>
        </WorkCard>
    </WorkCards>
    {/* <SkillSection /> */}
    </WorkMain>
  )
}

export default WorkSection