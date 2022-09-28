import styled from "styled-components";

export const Whyus = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: CENTER;
   align-items:center;
    height:1500px;
    width:100%;
    background-color:#000A05;
   
    .content{
   width:90%;    
   height:90%; 
color:white;
display:flex;
flex-direction: column;

align-items:center;


        .header-text{
font-size: 40px;
margin-bottom: 110px;
opacity:0;
        }

        .list{
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content: space-between;

.top{           width:100%;
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom: 60px;
  .left{
    margin-left:-1000px;
    opacity:0;
    margin-bottom: 140px;
}  
}

.bottom{
    width:100%;
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom: 60px;
  .right{
    opacity:0;
    margin-right:-1000px;
}  
}

.cont{

.circ{
    width:200px;
    height:200px;
    background-color:#c0c0c0;
     border-radius: 100%;
}
span{
    padding:10px;
    background-color:#000A05;
    font-size: larger;
    font-weight: bold;
}
}


        }
        .icon{
            display:flex;
            justify-content:center;
            align-items:center;
            .iconContent{
                      display:flex;
            flex-direction: column;
            align-items:center;
            margin-left: -500px;
            opacity: 0;
            width:90%;
    .writeup{
            text-align:center;
        
         font-size: larger;
         line-height: 30px;
        }
            
            }
      
        
        }
        
    }
`