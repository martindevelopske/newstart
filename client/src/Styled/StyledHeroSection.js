import styled from "styled-components";

export const HeroMain=styled.div`
display:flex;
flex-direction: row;
margin-left: 64px;
@media (max-width: ${(p)=>p.theme.mobile}) {
    flex-direction: column;
    height: auto;
    margin-left:32px;
    
}
`
export const StyledHerobox=styled.div`
margin-top: 64px;
margin-right: 20px;
width: 95%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
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
    
}
& .intro{
    width:70%;
}
& .separator{
    color: ${(p)=>p.theme.colorPrimary};
    font-size: 24px;
}
@media(max-width: ${(p)=>p.theme.tablet}){
    & li{
        font-size: 20px;
    }
    & h1{
        font-size: 42px;
    }
    & .separator{
        color: ${(p)=>p.theme.colorPrimary};
        font-size: 20px;
    }

}
@media (max-width: ${(p)=>p.theme.mobile}) {
    height: auto;
    width: 90%;
    margin-top:24px;
    
    & h1 {
        font-size: 24px;
    }
    & li{
        font-size: 18px;
    }
}
`

export const StyledImageHolder=styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
}

& h4{
    color:${(p)=>p.theme.colorPrimary}
} 
& a{
    text-decoration: none;
    pointer: hand;
    
}
& p{
    text-decoration:none;
}
& .number{
    color: white;
}
@media(max-width: ${(p)=>p.theme.tablet}){
    margin-top:10px;
    margin-right:20px;
}
@media(max-width:${(p)=>p.theme.mobile}){
    width: 90%;
    margin-top:32px;
    height: auto;
    & img{
        height:150px;
        width:150px;
    }
    & .socials{
        flex-direction: row;
    }

}
`



export const StyledSocialsHolder=styled.div`
width: 7%;
heigth: 400px;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;`