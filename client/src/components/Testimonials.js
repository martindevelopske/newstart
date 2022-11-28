import React from 'react'
import { TestimonialsData } from '../Data/TestimonialsData'
import { StyledSectionHeader } from '../Styled/StyledSectionHeader'
import { ServicesIntro } from '../Styled/StyledServicesSection'
import { TestimonialCard, TestimonialDescription, TestimonialImage, TestimonialsHolder, TestimonialsMain } from '../Styled/StyledTestimonials'

function Testimonials() {
  return (
    <TestimonialsMain id='testimonials'>
        <StyledSectionHeader>
        <div> Listen</div> To My <div>Clients</div>
    </StyledSectionHeader>
    <ServicesIntro>
    Having worked with various, here is what some of them have to say about me.
    </ServicesIntro>
    <TestimonialsHolder>
        {TestimonialsData ? TestimonialsData.map((item)=>{
            const {image,title,review,id}=item;
            return(
                <TestimonialCard key={id}>
            <TestimonialDescription>
            {`"${review} "`}
            </TestimonialDescription>
            <TestimonialImage>
                <img src={image} alt=''/>
                <p>{title}</p> 
            </TestimonialImage>
        </TestimonialCard>
        
            )
        }) : "To be updated"}
        
    </TestimonialsHolder>
    </TestimonialsMain>
    
    
  )
}

export default Testimonials