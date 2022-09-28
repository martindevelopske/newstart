import React from "react"
import {Link} from 'react-router-dom'
import { HeaderContainer, IconsHolder, NavHolder, Navlink, StyledEmail, StyledLogo, StyledSocialIcon } from "../Styled/Styled"
import {BsTwitter} from 'react-icons/bs'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import { NavLinksData } from "../Data/NavLinksData"
import { LinksData } from "../Data/LinkData"
function Header(){
    return(
        <>
        
        <HeaderContainer>
        <StyledLogo> Logo</StyledLogo>
        <NavHolder>
        {NavLinksData.map((item)=>{
            return(
                <Navlink>
                   <Link to={item.navigation}> {item.navigation}</Link>
                </Navlink>
            )
        })         
        }
        </NavHolder>
        
            <StyledEmail>
            martindevelopske@gmail.com 
            Tel: +254703605544
        </StyledEmail>

        <IconsHolder>
            {LinksData.map((item)=>{
                return(
                    <StyledSocialIcon>
                        {item.icon}
                    </StyledSocialIcon>
                )
            })}
        </IconsHolder>
        {/* <IconsHolder>
            <StyledSocialIcon>
                <BsTwitter />
            </StyledSocialIcon>
            <StyledSocialIcon>
                <AiFillInstagram />
            </StyledSocialIcon>
            <StyledSocialIcon>
                <AiFillGithub />
            </StyledSocialIcon>
            <StyledSocialIcon>
                <AiFillLinkedin />
            </StyledSocialIcon>

        </IconsHolder> */}
        </HeaderContainer>
        </>
    )
}
export default Header