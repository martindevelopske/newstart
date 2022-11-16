import styled from 'styled-components'
export const StyledProjectsMain=styled.div`
margin:32px;
& .holder{
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    
}
@media(max-width:${(p)=>p.theme.tablet}){
    & .holder{
    flex-direction: row;
    height:auto;
    }
}
@media(max-width:${(p)=>p.theme.mobile}){
    & .holder{
    flex-direction:column;
    }
}
`
export const ProjectCard=styled.div`
height:auto;
background-color:${p=>p.theme.fillColor};
width: 30%;
margin: 32px;
border: none;
border-radius:20px;

@media(max-width:${(p)=>p.theme.tablet}){
    width: 30%;
    margin:4px;
    height:auto;
    height:auto;
    
}
@media(max-width:${(p)=>p.theme.mobile}){
    height:auto;
    width:80%;
}
& .image{
    width:100%;
    height:150px;
    border-top-right-radius:20px;
    border-top-left-radius:20px;
};
`
export const StyledStackHolder=styled.div`
display:flex;
flex-direction:row;
width:90%;
height: 30px;
`
export const StyledStackIcon=styled.img`
width:15%;
@media(max-width:${p=>p.theme.tablet}){
width:20%;
}
@media(max-width:${p=>p.theme.mobile}){
    width:10%;
    }
;
`