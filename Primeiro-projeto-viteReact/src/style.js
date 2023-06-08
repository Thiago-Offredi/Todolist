import styled from 'styled-components'
import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc'

export const Container = styled.div`
    
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Todolist = styled.div`
    background: #ffffff;
    padding: 30px 20px;
    border-radius: 7px;
    
    ul{
        padding: 0;
        margin-top: 20px;
    }

`
export const Input = styled.input`

border: 2px solid rgba(209, 211, 212, 0.4);
border-radius: 5px;
height: 25px;
margin-right: 10px;
width: 340px;
margin-right: 20px;


`
export const Button = styled.button`
height: 30px;
background: #8052EC;
border-radius: 5px;
border: none;
line-height: 2px;
color: #ffffff;
width: 130px;
cursor: pointer;
&:hover{
    opacity: .8;
}
&:active{
    opacity:.4 ;
}
`
export const ListItem = styled.div`

background: ${(props) => (props.isFinished ? '#E8FF8B' : '#E4E4E4')};

box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 27px;
padding: 0 15px;
width: 500px;

li{
    list-style: none;

}



`
export const Trash = styled(FcEmptyTrash)`

cursor: pointer;
`
export const Check = styled(FcCheckmark)`

cursor: pointer;
`