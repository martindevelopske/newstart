import styled from 'styled-components'
import { Link } from 'react-scroll'

export const StyledLogo= styled.div`
margin-top:32px;
margin-left:32px;
font-size: 32px;
display:flex;
&>div {
font-size: 32px;
color: ${(props)=>props.theme.colorPrimary};

}`

export const NavContainer=styled.div`
margin-top:32px;
margin-right:32px;
width: 300px;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
`

export const HeaderContainer=styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom:32px;
position: sticky;
top:0;
background-color: rgba(33, 32, 30, 10);`

export const StyledLink= styled(Link)`
font-size: 14px;
text-decoration: none;
color: ${(p)=>p.theme.textColor};

&.active{
    color: ${(p)=>p.theme.colorPrimary}
}`;