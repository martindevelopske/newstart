import { AiOutlineCopyrightCircle } from 'react-icons/ai'
//import { Link } from 'react-router-dom'
import { Icons } from '../Data/IconsData'
import { FooterHolder, StyledEnd } from '../Styled/StyledFooter'
import { SocialIcon, SocialIconsHolder, SocialIconsHolderFooter, SocialIconsHolderFooter1 } from '../Styled/StyledSocialIcons'
//import SocialIcons from './SocialIcons'
import Separator from './Separator'

function Footer(){
    return(
      <>
      <FooterHolder>
            <p>  <AiOutlineCopyrightCircle />2022 Martin inc. All rights reserved.</p>
            <SocialIconsHolderFooter1>
            {Icons.map((prop) => {
      const {link, id,icon}=prop
      return (
      <SocialIcon key={id}>
        <a href={link} target="-blank"> {icon} </a>
      </SocialIcon>
      
     
      )
            })}
            </SocialIconsHolderFooter1>
            
         </FooterHolder>
         <StyledEnd>
          Made with ❤ and ☕ in Nairobi, Kenya.
         </StyledEnd>
      </>
        
         
    )
}
export default Footer