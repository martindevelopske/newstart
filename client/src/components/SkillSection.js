import React from 'react'
import { SkillsData } from '../Data/SkillsData'
import { StyledSectionHeader, StyledSkillSectionHeader } from '../Styled/StyledSectionHeader'
import { SkillsContainer, StyledIcon } from '../Styled/StyledSkillsSection'
import Zoom from 'react-reveal/Zoom'
function SkillSection() {
  return (
    <SkillsContainer>
        <StyledSkillSectionHeader>
            Here are some <div>Technologies</div>that I use:
        </StyledSkillSectionHeader>
        <div className='holder'>
          <div>
          {SkillsData.map((skill)=>{
            const {id,src}=skill;
            return(
              <Zoom rigth key={id}>
                <StyledIcon key={id} src={src} alt=''></StyledIcon>
              </Zoom>
              
        
            )
          })}
          </div>
         
          
        
        </div>     
        

    </SkillsContainer>
  )
}

export default SkillSection