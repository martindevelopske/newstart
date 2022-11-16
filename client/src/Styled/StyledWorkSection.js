import styled from 'styled-components'

export const WorkMain=styled.div`
margin:32px;
@media(max-width:${(p)=>p.theme.mobile}){
    margin:16px;
})`

export const WorkCard=styled.div`
width: 170px;
height: 230px;
margin: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
& p{
    font-size: 14px;
}
`
export const WorkCards=styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
@media(max-width: ${(p)=>p.theme.mobile}){
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
`

export const WorkImage=styled.div`
width: 170px;
height: 170px;
& div{
    font-size: 32px;
    color: ${(p)=>p.theme.colorPrimary};
    position: absolute;
    margin-top: 60px;
    margin-left: 60px;
    display: none;
}
& .search{
    color: ${(p)=>p.theme.colorPrimary};
}
& img{
    max-width:100%;
}
&:hover{
    opacity:0.5;
    & >div{
        display: inline;
    }
}`