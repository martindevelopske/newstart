import React from 'react'
import { Link } from 'react-scroll'
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
        <Link to='contact'>
        <Button child="Hire Me">
        </Button>
        </Link>
        <StyledImageHolder>
        {/* <div className='image'>
        <img src='./Images/pp2.jpg' alt='pic'/>
        
        </div> */}
         
        <div>
          <a href='mailto:martindevelopske@gmail.com' target="-blank"><h4>Martindevelopske@gmail.com</h4></a>
          <a href='tel:+254703605544' className='number'> <p> Tel: +254703605544 🤙 </p>
          </a>
        </div>
    </StyledImageHolder>
    </StyledHerobox>
    
    <SocialIconsHolder >
    {Icons.map((prop) => {
      const {link, id,icon}=prop
      return (
      <SocialIcon key={id}>
        <a href={link} target="-blank"> {icon} </a>
      </SocialIcon>
      
     
      )
    })}
    
    </SocialIconsHolder>
    </HeroMain>
  )
}

export default HeroSection