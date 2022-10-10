import styled from "styled-components";

export const StyledButton=styled.button`
Background-color: ${(p)=>p.theme.colorPrimary};
padding: 0px 24px;
color: white;
border-radius: 50px;
border: none;
@media(max-width: ${(p)=>p.theme.mobile}){
    padding: 1px 16px;
    font-size:12px;
}
`