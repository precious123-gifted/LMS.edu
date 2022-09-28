import styled from "styled-components";

export const NavBar = styled.div`
border-bottom: 2px solid #000A05;
display:flex;
justify-content:center;
background-color:#0E5E37;

width:100%;

    color:white;
   position:fixed;
   top:-40%;
   opacity:0;
.content{
    width:90%;
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
.logo-div{
    height:100%;
    width:10%;
border-right:2px solid #000a05;
display:flex;
justify-content:center;
align-items:center;
}
.list-and-button-div{
    height:100%;
    width:70%;
    display:flex;
    justify-content:space-between;
    .list-div{
        width:60%; 
        height:100%;
        display:flex;
    justify-content:space-between;
    align-items:center;
    .services{
        
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        position: relative;
        height:100%;


        .services-TXT{
            display:flex;
            justify-content:center;
            align-items:center;
            
        }
        .services-list{
            transition: 0.6s ease-in all;
            border-top: 2px solid #000a05;
            margin-top: 210px;
            height:80px;
            position:absolute;
          opacity:0;
            width:230px;
            height:150px;
            background-color:#0E5E37;
            display:flex;
            flex-direction: column;
            justify-content:space-between;
            padding-left: 10px;
     div{
        border-bottom: 1px solid #000A05;
     }       
            
        }
    }
    .list{
        border-radius  :15px ;
        display:flex;
    justify-content:center;
    align-items:center;
    transition: 0.6s all ease-in;
    cursor:pointer;
       
        padding-left:7px;
        padding-right:7px;
        height:50%;
        &:hover{
         background-color:black;
         animation:full 0.5s cubic-bezier(.6,-0.28,.74,.05);
         animation-fill-mode: forwards;
         transition: 0.6s all ease-in;
        }
    }
    }
    .button-div{
        width:30%;
          border-right: 2px solid #000A05;
          padding-right: 5px;
        display:flex;
    justify-content:space-between;
    align-items:center;  
    
    .signup-div{
        border-radius: 8px;
       
        width:110px;
        height:40px;
        background-color:white;
        color:#000A05;
        display:flex;
    justify-content:center;
    align-items:center;
    transition: 0.8s all ease-in;
    cursor:pointer;
    &:hover{
        background-color:#000A05;
        color:white;
    }
    }
    .login-div{
        border-radius: 8px;
        width:110px;
        height:40px;
        background-color:#000A05;
        color:white;
        display:flex;
    justify-content:center;
    align-items:center;
    transition: 0.8s all ease-in;
    cursor:pointer;
    &:hover{
        background-color:white;
        color:#000A05;
    }
    }
    }
}


}


@keyframes full {
    from{
        border-radius  :15px ;
        height:50%;
        color:black;
    }
    to{

        border-radius  :0 ;
        height:100%;
        color:white;
    }
}
`