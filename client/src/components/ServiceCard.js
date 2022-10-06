import React from 'react'
import { StyledServiceCard } from '../Styled/StyledServicesSection'

function ServiceCard({name,description,id,logo}) {
  return (
    <StyledServiceCard>
        <div>{logo}</div>
        <p>{name}</p>
        <p>{description} </p>
    </StyledServiceCard>
  )
}

export default ServiceCard