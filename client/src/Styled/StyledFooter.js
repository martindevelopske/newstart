import styled from "styled-components"
export const FooterHolder=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin: 8px;
& p{
    font-size: 10px;
}`

export const StyledEnd=styled.div`
font-size:12px;
margin-left:40%;
margin-bottom:16px;
@media(max-width:${(p)=>p.theme.tablet}){
    margin-left:35%;
}
@media(max-width:${(p)=>p.theme.mobile}){
    margin-left:22%;
}`