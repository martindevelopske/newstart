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
margin-left: -20px;
}
@media(max-width:${p=>p.theme.mobile}){
    margin-left:16px;
    &>div{
        margin-left:0px;
    }
}
@media(max-width:${p=>p.theme.tablet}){
    &>div{
        margin-left:0px;
    }
}`

export const NavContainer=styled.div`
margin-top:32px;
margin-right:64px;

width: 400px;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;

@media(max-width:${(p)=>p.theme.mobile}){
    display:none;
    
})`

export const HeaderContainer=styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom:32px;
position: sticky;
top:0;
background-color: rgba(33, 32, 30, 10);
z-index: 45;
@media(max-width:${(p)=>p.theme.mobile}){
    justify-content:space-between;
    margin-bottom:16px;
    height:auto;
})`

export const StyledLink= styled(Link)`
font-size: 14px;
text-decoration: none;
color: ${(p)=>p.theme.textColor};

&.active{
    color: ${(p)=>p.theme.colorPrimary}
}`
export const NavToggle=styled.div`
display:none;
width:5%;
font-size:1.3rem;
margin-top:32px;
margin-right:32px;
& i{
    color:white;
    border:none;
}
@media(max-width:${p=>p.theme.mobile}){
    display:block;
    

}`
export const StyledMobileMenu=styled.div`
width:90%;
background-color: #21201E;
display:none;
margin-left:16px;
margin-top:-17px;
position:fixed;

& div{
    margin-bottom:16px;
    border-bottom: 2px solid ${p=>p.theme.fillColor}
}
@media(max-width: ${p=>p.theme.mobile}){
    display:flex;
    flex-direction: column;
}

`