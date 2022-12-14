import styled from 'styled-components'
export const StyledSectionHeader=styled.div`
height: 32px;
display:flex;
flex-direction: row;
font-size:24px;
&> div{
    color:${(p)=>p.theme.colorPrimary};
    margin-left:5px;
}
@media(max-width: ${(p)=>p.theme.mobile}){
    font-size: 20px;
})`
export const StyledSkillSectionHeader=styled.div`
height: 32px;
display:flex;
flex-direction: row;
font-size:16px;
&> div{
    color:${(p)=>p.theme.colorPrimary};
    margin-left:5px;
}`