import React from 'react'
import { StyledSectionHeader } from '../Styled/StyledSectionHeader'
import { ServicesIntro } from '../Styled/StyledServicesSection'
import { WorkCard, WorkCards, WorkImage, WorkMain } from '../Styled/StyledWorkSection'

function WorkSection() {
  return (
    <WorkMain id='work'>
    <StyledSectionHeader>
        Check out my <div>Work</div>
    </StyledSectionHeader>
    <ServicesIntro>
        I help businesses grow by crafting amazing websites and web experiences. If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat.
        </ServicesIntro>
    <WorkCards>
        <WorkCard>
          <WorkImage></WorkImage>
          <p>company name</p>
        </WorkCard>
        <WorkCard>
        <WorkImage></WorkImage>
          <p>company name</p>
        </WorkCard>
        <WorkCard>
        <WorkImage></WorkImage>
          <p>company name</p>
        </WorkCard>
    </WorkCards>
    </WorkMain>
  )
}

export default WorkSection