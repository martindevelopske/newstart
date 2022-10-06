import React from 'react'
import { Icons } from '../Data/IconsData'
import { SocialIcon, SocialIconsHolder } from '../Styled/StyledSocialIcons'

function SocialIcons() {
  return (
    <SocialIconsHolder>
       
            {Icons.map((prop)=>{
                return(
                    <SocialIcon key={prop.id}>
                        {prop.icon}
                    </SocialIcon>
                )
            })}
        
    </SocialIconsHolder>
  )
}

export default SocialIcons