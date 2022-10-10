import styled from 'styled-components'
export const StyledServicesMain=styled.div`
dislay: flex;
flex-direction:column;
margin:32px;
@media(max-width: ${(p)=>p.theme.mobile}){
    width:90%;
}
`

export const ServicesIntro=styled.div`
font-size:14px;
width:50%;
margin-top:16px;
`
export const StyledServiceCard=styled.div`
margin:16px;
border-top-left-radius: 30px;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
background-color: ${(p)=>p.theme.fillColor};
& >div{
    color: ${(p)=>p.theme.colorPrimary};
};
@media(max-width: ${(p)=>p.theme.mobile}){
    heigth: auto;
    
}
`

export const CardsHolder=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 64px;
& *{
    flex: 0 1 40%;
    margin-left: 32px;
} 
@media(max-width: ${(p)=>p.theme.mobile}){
    width:100%;
    & *{
        flex: 0 1 80%;
    }
}

`