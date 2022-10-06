import React from 'react'
import { HeroMain, StyledHerobox, StyledImageHolder, StyledSocialsHolder } from '../Styled/StyledHeroSection'
import Button from './Button'
import SocialIcons from './SocialIcons'

function HeroSection() {
  return (
    <HeroMain>
    <StyledHerobox>
      <h1> I'm Martin Ndung'u</h1>
      <div>
        <ul>
          <li> Web Designer</li>
          /
          <li> Web Developer</li>
          &
          <li> Digital Marketer</li>
        </ul>
      </div>
      
        <p>I help businesses grow by crafting amazing websites and web experiences. If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat.</p>
        <Button child="Hire Me" onClick={()=>{alert("clicked")}}>
          
        </Button>
      
    </StyledHerobox>
    <StyledImageHolder>
        <div>
          <img src='/' alt=''/>
        </div>
        <div>
          <h4>Martindevelopske@gmail.com</h4>
          <p> Tel: +254703605544</p>
        </div>
    </StyledImageHolder>
    <StyledSocialsHolder>
        <SocialIcons />
    </StyledSocialsHolder>
    </HeroMain>
  )
}

export default HeroSection