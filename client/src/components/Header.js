import React from 'react'

import { NavLinksData } from '../Data/NavLinksData'
import { HeaderContainer, NavContainer, StyledLink, StyledLogo } from '../Styled/StyledHeader'

function Header() {
  return (
    <>
    <HeaderContainer>
        <StyledLogo>
            Martin
            <div>.</div>
        </StyledLogo>
        <NavContainer>
          {NavLinksData.map((prop)=>{
            return(
              <StyledLink key={prop.id} to={prop.navigation}>{prop.navigation}</StyledLink>
            )
          })}
           
        </NavContainer>
    </HeaderContainer>
    </>
  )
}

export default Header