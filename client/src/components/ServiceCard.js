import React from 'react'
import { StyledServiceCard } from '../Styled/StyledServicesSection'

function ServiceCard({name,description,id,logo}) {
  return (
    <StyledServiceCard key={id}>
        <div>{logo}</div>
        <h4>{name}</h4>
        <p>{description} </p>
    </StyledServiceCard>
  )
}

export default ServiceCard