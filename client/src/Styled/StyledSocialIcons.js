import styled from "styled-components";

export const SocialIconsHolder=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`

export const SocialIcon= styled.div`
width:24px;
height:24px;
margin: 10px;
color: ${(p)=>p.theme.colorPrimary};`