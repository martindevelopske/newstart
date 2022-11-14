import styled from "styled-components";

export const SkillsContainer=styled.div`
margin-top:32px;
width:90%;
height: auto;

& h3{
    color: ${(theme)=>theme.theme.colorPrimary};
    font-size: 16px;
}
& li{
    font-size:14px;
    list-style:none;
    list-style-type:square;
}
& .holder{
    width:70%;
    margin-left:25%;    
    & div{
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    
}`
export const StyledIcon=styled.img`
width: 64px;
margin:15px;
height: auto;

@media(max-width: ${(p)=>p.theme.mobile}){
    width: 32px;
    margin:4px;
    
}
`