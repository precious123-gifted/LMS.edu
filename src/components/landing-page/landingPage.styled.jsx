import styled from "styled-components";
import LandingBG from '../../assets/landingpage.png'




export const LandingPageStyled = styled.div`

    height:660px;
    width:100%;
     background-image: url(${LandingBG});
     background-size: cover;
  
     background-position:center;
   display:flex;
   justify-content:center;
   align-items:center;
   transition:9s;
   transition-timing-function: ease-in-out;


    
.content{
    border: 6px solid #168F55;
    width:95%;
    height:95%;
    display:flex;
    
flex-direction:column;
    justify-content:center;
    align-items:center;
    .logo{
        width:97;
        display:flex;
        
    }
    .container{
        height:100%;
        width:97%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .section1{
           
        height:70%;
        width:50%;
        display:flex;
        flex-direction:column;
      
       margin-top: 60px;
      
       .headerTXT{
        color:#11d174;
        font-size: 350%;
        
       }
      .slideTXT{
        font-size: 350%;
        color:#f6f6f6;
      }
    }

    .section2{
       
        height:70%;
        width:50%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:flex-end;
       margin-top: 60px;
       .bubbles{
        width:30%;
display:flex;
justify-content:space-between;
align-items:center;
.bubble{
    background-color:#14c46f;
    height:25px;
    width:25px;
    border-radius: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    .active{
        background-color:#434343;
    height:30px;
    width:30px;
    border-radius: 100%;
    position:absolute;
    opacity: 0;
    }
}
       }
       .BTN{
        top:80%;
        position:absolute;
        width:170px;
        height:50px;
background-color:#f4f4f4;
color:#00130A;
display:flex;
justify-content:center;
align-items:center;
border: 2px solid #000A05;
            font-size: 20px;
            border-radius  :15px ;
   
    cursor:pointer;
        padding-left:7px;
        padding-right:7px;
        transition: 1.3s ease-in all;
        &:hover{
            border: 2px solid #0c693b;
background-color:#000A05;
color:white;
        }
        span{
            font-size: 25px;
        }
       }
    }
    }

}

`