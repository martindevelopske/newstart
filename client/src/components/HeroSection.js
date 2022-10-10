import React from 'react'
import { Icons } from '../Data/IconsData'
import { HeroMain, StyledHerobox, StyledImageHolder } from '../Styled/StyledHeroSection'
import { SocialIcon, SocialIconsHolder } from '../Styled/StyledSocialIcons'
import Button from './Button'
//import SocialIcons from './SocialIcons'

function HeroSection() {
  return (
    <HeroMain id='hero'>
    <StyledHerobox>
      <h1> I'm Martin Ndung'u</h1>
      <div>
        <ul>
          <li> Web Designer</li>
          <div className='separator'>/</div>
          <li> Web Developer</li>
          <div className='separator'>&</div>
          <li> Digital Marketer</li>
        </ul>
      </div>
      
        <p>I help businesses grow by crafting amazing websites and web experiences. If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat.</p>
        <Button child="Hire Me" onClick={()=>{alert("clicked")}}>
          
        </Button>
      
    </StyledHerobox>
    <StyledImageHolder>
        
          <img src='./Images/pp1.jpg' alt='pic'/>
        
        <div>
          <a href='mailto:martindevelopske@gmail.com' target="-blank"><h4>Martindevelopske@gmail.com</h4></a>
          <a href='tel:+254703605544' className='number'> <p> Tel: +254703605544</p>
          </a>
        </div>
    </StyledImageHolder>
    <SocialIconsHolder >
    {Icons.map((prop) => {
      return (<a href={prop.link} target="-blank">
      <SocialIcon key={prop.id}>
      {prop.icon}
      </SocialIcon>
  </a> )
    })}
    
    </SocialIconsHolder>
    </HeroMain>
  )
}

export default HeroSection