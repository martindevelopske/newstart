import { AiOutlineCopyrightCircle } from 'react-icons/ai'
//import { Link } from 'react-router-dom'
import { Icons } from '../Data/IconsData'
import { FooterHolder } from '../Styled/StyledFooter'
import { SocialIcon, SocialIconsHolder } from '../Styled/StyledSocialIcons'
//import SocialIcons from './SocialIcons'

function Footer(){
    return(
        <FooterHolder>
            <p>  <AiOutlineCopyrightCircle />2022 Martin inc. All rights reserved.</p>
            <SocialIconsHolder fx="row">
            {Icons.map((prop)=>{
                return(
                    <a href={prop.link} target="-blank">
                        <SocialIcon key={prop.id}>
                        {prop.icon}
                    </SocialIcon>
                    </a>
                        
                    
                )
            })}
            </SocialIconsHolder>
         </FooterHolder>
    )
}
export default Footer