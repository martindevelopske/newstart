import React from 'react'
import { StyledButton } from '../Styled/StyledButton'

function Button({child,onClick}) {
  return (
    <StyledButton children={child} onClick={onClick}>
       <h3>{child}</h3> 
    </StyledButton>
  )
}

export default Button