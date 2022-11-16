import styled from 'styled-components'
export const StyledProjectsMain=styled.div`
margin:32px;
& .holder{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    border:2px solid red;
    
}
@media(max-width:${(p)=>p.theme.tablet}){
    & .holder{
    flex-direction:row;
    border:2px solid blue;
    height:auto;
    }
}
@media(max-width:${(p)=>p.theme.mobile}){
    & .holder{
    flex-direction:column;
    border:2px solid white;
    }
})
`
export const ProjectCard=styled.div`
height:200px;
width: 30%;
margin: 32px;
border: 1px solid green;

@media(max-width:${(p)=>p.theme.tablet}){
    width: 70%;
    margin:8px;
    height:auto;
    border:2px solid grey;
    height:auto;
    flex-wrap:wrap;
}
@media(max-width:${(p)=>p.theme.mobile}){
    border:2px solid blue;
    height:auto;
    width:80%;
}
& img{
    width:100%;
    height:150px;
};


`