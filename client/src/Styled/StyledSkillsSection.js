import styled from "styled-components";

export const SkillsContainer=styled.div`
margin:32px;
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
    margin-top: 48px;   
    & div{
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    
}
@media(max-width:${(p)=>p.theme.mobile}){
    margin:16px;
})`
export const StyledIcon=styled.img`
width: 64px;
margin:15px;
height: auto;

@media(max-width: ${(p)=>p.theme.mobile}){
    width: 32px;
    margin:4px;
    
}
`