import styled from "styled-components";
export const ContactMain=styled.div`
margin: 32px;
`
export const ContactFormHolder=styled.div`
display:flex;
flex-direction:row;
margin: 32px;
height: 500px;
justify-content: space-around;
align-items:center;
;`

export const ContactIntro=styled.div`
display:flex;
flex-direction:column;
width: 40%;
height:200px;
justify-content: space-around;`

export const ContactForm=styled.form`
border: 1px solid  ${(p)=>p.theme.fillColor};
display: flex;
flex-direction: column;
justify-content: space-around;
width: 55%;
height: 400px;
& input{
    margin: 16px;
    width: 90%;
    border: 1px solid rgba(206, 205, 202, 0.5);
    background-color: ${(p)=>p.theme.bgColor};
}
& button{
    margin-left: 25%;
}
`