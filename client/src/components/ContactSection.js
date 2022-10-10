import React from 'react'
import { ContactForm, ContactFormHolder, ContactIntro, ContactMain } from '../Styled/ContactStyled'
import { StyledSectionHeader } from '../Styled/StyledSectionHeader'
import Button from './Button'

function ContactSection() {
  return (
    <ContactMain id='contact'>
        <StyledSectionHeader>
            Let's <div> Talk </div>
        </StyledSectionHeader>
        <ContactFormHolder>
          <ContactIntro>
            <h1>Got a project in mind?</h1>
            <p>
            use the form to give as much details as possible and I’ll get back to you as soon as I can.
            </p>
          </ContactIntro>
          <ContactForm>
            <form>
              <div>
              <input placeholder='Name' className="name" type="text"></input>
              </div>
              <div>
              <input placeholder='Email' className="email" type='email'></input>
              </div>
              <div>
              <input placeholder='Message' className="message" type="text"></input>
              </div>
              <div>
              <Button child="Send Message"></Button>
              </div>
             
            </form>
          </ContactForm>
        </ContactFormHolder>
    </ContactMain>
  )
}

export default ContactSection