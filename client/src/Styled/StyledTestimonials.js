import styled from "styled-components";
export const TestimonialsMain=styled.div`
margin: 32px;
display: flex;
flex-direction: column;
`

export const TestimonialsHolder=styled.div`
display: flex;
flex-direction: row;
margin: 32px;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;`

export const TestimonialCard=styled.div`
display:flex;
flex-direction:column;
width: 40%;
margin: 16px;
border: 2px solid rgba(206, 205, 202, 0.4);
border-radius: 10px;
font-size: 12px;
@media(max-width: ${(p)=>p.theme.mobile}){
    width:90%;
}`

export const TestimonialDescription=styled.div`
margin: 10px;

& div{
    color: ${(p)=>p.theme.colorPrimary}
}
& p{
    font-size:13px;
}`
export const TestimonialImage=styled.div`
display:flex;
flex-direction: row;
& img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px;
    border: 1px solid ${(p)=>p.theme.colorPrimary};
}
& p{
    font-style: italic;
    font-weight: bold;
}`