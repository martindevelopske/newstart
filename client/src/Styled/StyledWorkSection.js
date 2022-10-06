import styled from 'styled-components'

export const WorkMain=styled.div`
margin:32px;`

export const WorkCard=styled.div`
border: 1px solid grey;
width: 200px;
height: 200px;
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
`

export const WorkImage=styled.div`
width: 150px;
height: 150px;
border: 2px solid red;`