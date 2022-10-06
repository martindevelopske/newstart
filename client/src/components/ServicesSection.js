import React from 'react'
import { ServicesData } from '../Data/ServiesData'
import { StyledSectionHeader } from '../Styled/StyledSectionHeader'
import { CardsHolder, ServicesIntro, StyledServicesMain } from '../Styled/StyledServicesSection'
import ServiceCard from './ServiceCard'

function ServicesSection() {
  return (
    <StyledServicesMain>
        <StyledSectionHeader>
            My <div> Services</div>
        </StyledSectionHeader>
        <ServicesIntro>
        I help businesses grow by crafting amazing websites and web experiences. If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat.
        </ServicesIntro>
        <CardsHolder>
            {ServicesData.map((props)=>{
                const {name,description,logo,id}= props;
                return(
                    <ServiceCard name={name} description={description} logo={logo} id={id}>
                        
                    </ServiceCard>
                )
            })}
        </CardsHolder>
    </StyledServicesMain>
  )
}

export default ServicesSection