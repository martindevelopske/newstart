import styled from "styled-components";

export const SocialIconsHolder=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(max-width: ${(p)=>p.theme.mobile}){
 display:none;   
}
`
export const SocialIconsHolderFooter=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
display:none;
@media(max-width: ${(p)=>p.theme.mobile}){
    display:flex;
}
`
export const SocialIconsHolderFooter1=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
@media(max-width: ${(p)=>p.theme.mobile}){
    
}
`
export const SocialIcon= styled.div`
width:24px;
height:24px;
margin: 10px;
& a{
    color: ${(p)=>p.theme.colorPrimary};
}`