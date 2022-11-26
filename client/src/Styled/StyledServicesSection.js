import styled from 'styled-components'
export const StyledServicesMain=styled.div`
dislay: flex;
flex-direction:column;
margin:32px;
@media(max-width: ${(p)=>p.theme.mobile}){
    width:90%;
    margin:24px;
}
`

export const ServicesIntro=styled.div`
font-size:14px;
width:50%;
margin-top:16px;
margin-bottom: 16px;
@media(max-width:${(p)=>p.theme.mobile}){
    width:90%;
})
`
export const StyledServiceCard=styled.div`
width:100%;
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
    margin:8px;
    
    
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
@media(max-width:${p=>p.theme.tablet}){
    & *{
        margin-left: 8px;
        
    }
}
@media(max-width: ${(p)=>p.theme.mobile}){
    
    width:100%;
    & *{
        flex: 0 1 80%;
        margin-left: 20px;
        
    }
}

`