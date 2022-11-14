import React from 'react'
import { StyledSectionHeader, StyledSkillSectionHeader } from '../Styled/StyledSectionHeader'
import { SkillsContainer, StyledIcon } from '../Styled/StyledSkillsSection'

function SkillSection() {
  return (
    <SkillsContainer>
        <StyledSkillSectionHeader>
            Here are some <div>Technologies</div>that I use:
        </StyledSkillSectionHeader>
        <div className='holder'>
          <div>
          <StyledIcon src='./logos/html.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/css.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/js.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/react2.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/node.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/mongo1.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/git.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/github90.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/redux96.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/mui96.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/ex100.png' alt=''></StyledIcon>
        <StyledIcon src='./logos/figma96.png' alt=''></StyledIcon>
          </div>
        
        </div>     
        

    </SkillsContainer>
  )
}

export default SkillSection