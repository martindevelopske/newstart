import styled from "styled-components";
export const ContactMain=styled.div`
margin: 32px;
@media(max-width:${(p)=>p.theme.mobile}){
margin:16px;
})
`
export const ContactFormHolder=styled.div`
display:flex;
flex-direction:row;
margin: 32px;
height: 500px;
justify-content: space-around;
align-items:center;
;
@media(max-width: ${(p)=>p.theme.mobile}){
    margin:8px;
    flex-direction: column;
    height: auto;
    justify-content:space-between;
}`

export const ContactIntro=styled.div`
display:flex;
flex-direction:column;
width: 40%;
height:200px;
justify-content: space-around;
@media(max-width: ${(p)=>p.theme.mobile}){
    width:90%;
}`

export const ContactForm=styled.div`
border: 1px solid  ${(p)=>p.theme.fillColor};
display: flex;
flex-direction: column;
justify-content: space-around;
width: 55%;
height: 400px;
& .message{
    height: 80px;
    color: black;
    
    margin: 16px;
    width: 90%;
    border: 1px solid rgba(206, 205, 202, 0.5);
    background-color: ${(p)=>p.theme.bgColor};
    overflow: wrap;
    overflow-wrap: break-word;

}
& .name{
    height: 20px;
    color:black;
    margin: 16px;
    width: 90%;
    border: 1px solid rgba(206, 205, 202, 0.5);
    background-color: ${(p)=>p.theme.bgColor};

}
& .email{
    height: 20px;
    color: black;
    margin: 16px;
    width: 90%;
    border: 1px solid rgba(206, 205, 202, 0.5);
    background-color: ${(p)=>p.theme.bgColor};

}

@media(max-width: ${(p)=>p.theme.mobile}){
    width:95%;
    & button{
        margin-left: 25%;
    }
}
@media(max-width: ${(p)=>p.theme.tablet}){
    width:80%;
    & button{
        margin-left: 30%;
    }
}


`