import styled from "styled-components";

export const HOW = styled.div`
border-top: 2px solid #000A05;
border-bottom: 2px solid #000A05;
    height:1000px;
    color:#00130A;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom: 70px;

    .content{
        border-left: 2px solid #000A05;
        border-bottom: 2px solid #000A05;
        padding-left: 30px;
height:90%;
display:flex;
flex-direction:column;
align-items:center;


.header{
    font-size: 40px;
    margin-bottom: 70px;
    span{
        
     
    
    }
}

.steps{
    height:80%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    .step{
        width:600px;
        height:90px;
        display:flex;
        justify-content:space-between;
        opacity:0;
        margin-left: -1000px;
        .number{

        }
        .write-up{
background-color:#E7EFEB;
border-radius: 30px;
border: 2px solid #000A05;
font-size: large;
width:432px;
height:130px;
display:flex;
justify-content:center;
align-items:center;
padding: 20px;
        }
    }
    .btn{
        width:150px;
        height:70px;
        opacity:1;
        align-self: flex-end;
        opacity:0;
        
        span{
            border: 2px solid #000A05;
            font-size: 20px;
            border-radius  :15px ;
            background-color:#000A05;
            color:white;
        display:flex;
    justify-content:center;
    align-items:center;
    transition: 0.6s all ease-in;
    cursor:pointer;
       
        padding-left:7px;
        padding-right:7px;
        height:80%;
        &:hover{
      background-color:white;
      color:#000A05;
        }
        }
    }
}

    }
    
`