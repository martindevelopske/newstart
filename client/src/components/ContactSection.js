import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { ContactForm, ContactFormHolder, ContactIntro, ContactMain } from '../Styled/ContactStyled'
import { StyledSectionHeader } from '../Styled/StyledSectionHeader'
import Button from './Button'

export const ContactUs=()=>{
  
}
function ContactSection() {
  const form =useRef();

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm("service_ge6uy12", "template_egp6xzu",form.current,"zRkkjL78ryGhy2pvo")
    .then((result)=>{
      console.log(result.text);
    }, (error)=> console.log(error.text))
        form.current.reset();
  }
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
            <form ref={form} onSubmit={sendEmail}>
              <div>
              <input placeholder='Name' className="input name" type="text" name='user_name'></input>
              </div>
              <div>
              <input placeholder='Email' className="input email" type='email' name='user_email'></input>
              </div>
              <div>
              <textarea placeholder='Message' className="input message" type="text" name='message'></textarea>
              </div>
              <div>
              <Button type='submit' onClick={sendEmail} child="Send Message" value='send'></Button> 
              </div>
             
            </form>
          </ContactForm>
        </ContactFormHolder>
    </ContactMain>
  )
}

export default ContactSection