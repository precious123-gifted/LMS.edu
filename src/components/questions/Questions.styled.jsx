import styled from "styled-components";

export const QUestions = styled.div`
    background-color:#00130A;
    color:white;
height:200px;
width:100%;
display:flex;
justify-content:center;
align-items:center;

.content{
    border-left: 2px solid #ffffff; 
    border-right: 2px solid #ffffff;
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
        display:flex;
        flex-direction: column;
        align-items:center;
        font-size:larger;
        line-height:30px;
        .email-number{
            width:70%;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
    }


}

    
`