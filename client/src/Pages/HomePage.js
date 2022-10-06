import React from 'react'
import ContactSection from '../components/ContactSection'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Separator from '../components/Separator'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'
import WorkSection from '../components/WorkSection'

function HomePage() {
  return (
    <>
    <Header />
    <HeroSection />
    <Separator />
    <ServicesSection />
    <Separator />
    <WorkSection />
    <Separator />
    <Testimonials />
    <Separator />
    <ContactSection />
    </>
  )
}

export default HomePage