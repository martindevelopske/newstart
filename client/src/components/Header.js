import React from 'react'
import { Link } from 'react-scroll'

//import { NavLinksData } from '../Data/NavLinksData'
import { HeaderContainer, NavContainer, StyledLink, StyledLogo } from '../Styled/StyledHeader'
//import Testimonials from './Testimonials'
 
// const handleActive=()=>{
//   alert("active")
//   // document.querySelector('active').style.color="blue"
// }
function Header() {
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
    </HeaderContainer>
    </>
  )
}

export default Header