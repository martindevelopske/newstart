import React from 'react'
import { ServicesData } from '../Data/ServiesData'
import { StyledSectionHeader } from '../Styled/StyledSectionHeader'
import { CardsHolder, ServicesIntro, StyledServicesMain } from '../Styled/StyledServicesSection'
import ServiceCard from './ServiceCard'
import Slide from 'react-reveal/Slide'
function ServicesSection() {
  return (
    <StyledServicesMain id='services'>
        <StyledSectionHeader>
            My <div> Services</div>
        </StyledSectionHeader>
        <ServicesIntro>
        My main goal being crafting amazing web expiriences, all that is done 
        </ServicesIntro>
        <CardsHolder>
            {ServicesData.map((props)=>{
                const {name,description,logo,id}= props;
                return(
                    <Slide left>
                        <ServiceCard name={name} description={description} logo={logo} id={id} key={id}>
                        
                        </ServiceCard>
                    </Slide>
                    
                )
            })}
        </CardsHolder>
    </StyledServicesMain>
  )
}

export default ServicesSection;