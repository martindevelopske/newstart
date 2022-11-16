import styled from 'styled-components'

export const StyledCardButton=styled.button`

color:${color=>color.color};
margin:8px;
font-size:16px;
border:none;
border-radius:10px;
height: 24px;
background-color: ${(bg)=> bg.bg} ;
& i{
    margin-left:5px;
}
&:hover{
    scale:1.1;
}
`