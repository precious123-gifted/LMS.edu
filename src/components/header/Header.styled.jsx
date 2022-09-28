import styled from "styled-components";
import BG from '../../assets/header-bg.png'

export const HEader = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:660px;
width:100%;
background-color:#e9e7e7;

color:white;


    
.content{
    height:100%;
    width:90%;
    display:flex;
    

    justify-content:space-between;
    align-items:center;
    .section1{
        height:75%;
        width:50%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
       margin-top: 60px;
        
       
          .write-up{
        margin-left: -810px;
        color:#000A05;
       cursor: none;
        width:100%;
        font-size: 72px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    align-items:center;
    margin-bottom: 60px;
    border-right: 2px solid #000A05;
        
       
     
   
   
    }  


    .btn{
        width:150px;
        height:70px;
        opacity:0;
        margin-left: -810px;
        
        span{
            border: 2px solid #0c693b;
            font-size: 20px;
            border-radius  :15px ;
           
      
            
        display:flex;
    justify-content:center;
    align-items:center;
    transition: 0.6s all ease-in;
    cursor:pointer;
        background-color:#000A05;
     color:white;
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

    .section2{
        height:75%;
        margin-right: -510px;
    }

}
    
`