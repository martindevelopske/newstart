import React from 'react'
import { Link } from 'react-scroll'
import { Icons } from '../Data/IconsData'
import { HeroMain, HeroText, StyledHerobox, StyledImageHolder } from '../Styled/StyledHeroSection'
import { SocialIcon, SocialIconsHolder } from '../Styled/StyledSocialIcons'
import Button from './Button'
//import SocialIcons from './SocialIcons'
import Rotate from 'react-reveal/Rotate'
function HeroSection() {
  return (
    <HeroMain id='hero'>
      <Rotate bottom right>
      <HeroText>
        Turning Ideas into real projects.
      </HeroText>
      </Rotate>
      
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
      
        <p className='intro'>I help businesses grow by crafting amazing websites and web experiences.
      
        <p>
        This portfolio is a representation of all I have learned and accomplished as a web developer and also a computer science student.
        </p>
        <p>
        I am currently <div>available for freelance work</div>  so If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat.
        </p>
         </p>
        <Link to='contact'>
        <Button child="Hire Me">
        </Button>
        </Link>
        <StyledImageHolder>
        {/* <div className='image'>
        <img src='./Images/pp2.jpg' alt='pic'/>
        
        </div> */}
         
        <div className='heroContact'>
          <a href='mailto:martindevelopske@gmail.com' target="-blank"><h6>Martindevelopske@gmail.com</h6></a>
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