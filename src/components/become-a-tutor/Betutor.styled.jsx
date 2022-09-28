import styled from "styled-components";
import Tutorimg from '../../assets/tutorbg.png'


export const BeTutor = styled.div`
    
    background-image: url(${Tutorimg});
    background-attachment: fixed;
 color:white;
height:500px;
width:100%;
display:flex;
justify-content:center;
align-items:center;

.content{
    
    width:90%;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    .header{
       font-size: 40px; 
   
    }
    .write-up{
        font-size:larger;
        text-align:center;
        line-height:30px;
     
    }
    .btn{
        border-radius: 10px;
        border:2px solid #00130A;
    
        color:#00130A;
        cursor: pointer;
        font-size: 23px;
        width:170px;
        height:60px;
        background-color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        transition:0.6s all ease-in;
        &:hover{
            background-color:#00130A;
            color:white;
            transition:0.6s all ease-in;
        }

    }
}
    
`