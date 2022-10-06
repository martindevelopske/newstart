import styled from "styled-components";
export const StyledHerobox=styled.div`
margin-top; 64px;
margin-right: 20px;
width: 55%;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
& h1 {
    font-size: 48px;
}
& ul {
    
    display:flex;
    flex-direction:row;
    list-style:none;
    font-size: 24px;
}
& li {
    margin-right: 5px;
}
& p{
    font-size: 16px;
    font-weight: 200px;
}`

export const StyledImageHolder=styled.div`
width:30%;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
& img{
    border:3px solid ${(p)=>p.theme.colorPrimary};
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-top:10px;
}
& h4{
    color:${(p)=>p.theme.colorPrimary}
}`

export const HeroMain=styled.div`
display:flex;
flex-direction: row;
margin-left: 64px;`

export const StyledSocialsHolder=styled.div`
width: 7%;
heigth: 400px;
display:flex;
justify-content:center;
align-items:center;`