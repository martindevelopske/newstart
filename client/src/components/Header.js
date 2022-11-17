import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Icons } from '../Data/IconsData';

import { NavLinksData } from '../Data/NavLinksData'
import { HeaderContainer, NavContainer, NavToggle, StyledLink, StyledLogo, StyledMobileMenu } from '../Styled/StyledHeader'
import { SocialIcon, SocialIconsHolder } from '../Styled/StyledSocialIcons';
//import Testimonials from './Testimonials'
 //import {GrMenu} from 'react-icons/gr'

function Header() {
  const [menu,setmenu]=useState(false);
  const [button,setButton]=useState(<i class="fa fa-bars" aria-hidden="true"></i>)
  const handleToggle=()=>{
    if(!menu){
      setmenu(true);
      setButton(<i class="fa fa-times" aria-hidden="true"></i>);
    } else {
      setButton(<i class="fa fa-bars" aria-hidden="true"></i>);
      setmenu(false);
      
    }
   
  }
  return (
    <>
    <HeaderContainer>
        <StyledLogo>
            <Link to='hero' smooth={true} spy={true} offset={-100} duration={500}>Martin</Link> 
            <div>.</div>
        </StyledLogo>
        <NavContainer>
          {/* {NavLinksData.map((prop)=>{
            return(
              <StyledLink to={<Testimonials />} spy={true} smooth={true} duration={500} offset={50} delay={200}>{prop.name}</StyledLink>
            )
          })} */}
          <StyledLink to='hero' activeClass='active'  smooth={true} offset={-100} duration={500}   spy={true}>About</StyledLink>
          <StyledLink to='services' smooth={true} offset={-100} duration={500} spy={true} activeClass='active'>Services</StyledLink>
          <StyledLink to='work' smooth={true} offset={-100} duration={500} spy={true} activeClass='active'>Work</StyledLink>
          <StyledLink to='testimonials' smooth={true} offset={-100} duration={500}  spy={true} activeClass='active'>Testimonials</StyledLink>
          <StyledLink to='contact' smooth={true} offset={-100} duration={500} spy={true} activeClass='active'>Contact</StyledLink>
           
        </NavContainer>
        <NavToggle onClick={handleToggle}>
        {/* <i class="fa fa-times" aria-hidden="true"></i> */}
        {button}
        </NavToggle>
        
    </HeaderContainer>
    {menu ? 
    <>
    <StyledMobileMenu>
          {NavLinksData.map((link)=>{
            return(
              
              <Link to={link.navigation} smooth={true} offset={-100} duration={600} spy={true} activeClass='active' onClick={()=>{
                setmenu(false)
                setButton(<i class="fa fa-bars" aria-hidden="true"></i>)
              }}>
                  <div>
                  {link.name}
                  </div>
                  </Link>
              )
          })}
        </StyledMobileMenu>
        
        </>: "" }
    
    </>
  )
}

export default Header