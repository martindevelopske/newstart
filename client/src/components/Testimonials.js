import React from 'react'
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
         I help businesses grow by crafting amazing websites and web experiences. If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat.
    </ServicesIntro>
    <TestimonialsHolder>
        <TestimonialCard>
            <TestimonialDescription>
            <div>"</div>
            <p>I help businesses grow by crafting amazing websites and web experiences. If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat. <div>"</div></p>
            </TestimonialDescription>
            <TestimonialImage>
                <img src="./Images/pp1.jpg" alt=''/>
                <p> hames kamau at Google.</p> 
            </TestimonialImage>
        </TestimonialCard>
        <TestimonialCard>
            <TestimonialDescription>
            <div>"</div>
            <p>I help businesses grow by crafting amazing websites and web experiences. If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat. <div>"</div></p>
            </TestimonialDescription>
            <TestimonialImage>
                <img src="./Images/pp1.jpg" alt=''/>
                <p> hames kamau at Google.</p> 
            </TestimonialImage>
        </TestimonialCard>
        <TestimonialCard>
            <TestimonialDescription>
            <div>"</div>
            <p>I help businesses grow by crafting amazing websites and web experiences. If you’re looking for a designer and a developer that likes to get work done to your satisfaction, let’s chat. <div>"</div></p>
            </TestimonialDescription>
            <TestimonialImage>
                <img src="./Images/pp1.jpg" alt=''/>
                <p> hames kamau at Google.</p> 
            </TestimonialImage>
        </TestimonialCard>
    </TestimonialsHolder>
    </TestimonialsMain>
    
    
  )
}

export default Testimonials