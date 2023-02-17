import styled, { keyframes } from "styled-components";

export const Container = styled.div`
   
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;

   position: relative;
   top: 0;

   border-bottom: 2px solid;
   border: var(--grey-6);
   
   width: 100vw;
   height: 50px;
   background-color: var(--grey-10); 

   font-family: 'Inter', sans-serif;;
   font-size: 13px;
   color:var(--grey-2);
   font-weight: 700;
    
   .reponsive{
    display: none;
  }
  .icon{
   display: none;

   width: 15px;
   height: 15px;

   background-color: var(--grey-9);
  }

  .divLogo{
    display: flex;
    align-items: center;

    width: 100%;
  }
  


   .Main{
      display: flex;
      width: 100%;
   }
   .right{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 7px;

      width: 80%;

      border-right: 2px solid var(--grey-6);

   }

   .nav{
      width: 30%;

      display: flex;
      justify-content: space-evenly;
   }

   .left{
      display: flex;
      align-items: center;

      width: 20%;

   }
   .div-log{
      width: 100% ;

      display: flex;
      justify-content: space-evenly;

   }
   .div-motor{
      display: flex;
   }
   .div-login{
      display: none;
   }
   
   .img{
      height: 60px;
      width: 60px;

      border-radius: 50%;

   }
   .imagem{
      width: 40px;
      height: 40px;
   }
   .button{
      border: none;
      border-radius: 0;
   }
   .right-register{
      display: none;
      justify-content: center;
      align-items: center;

      width: 100%;
   }
   .DropDown{
      position: absolute;
      right: 2rem;
      top: 2.8rem;

      display: none;
      justify-content: center;
      
      width: 170px;
      height: 182px;
      
      background-color: var(--grey-9) ;
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
      border-radius: 4px;

      color:var(--grey-2) ;
      font-weight: 400;
      font-size: 14px;
   }
   ol{
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
   }
   .user{
      font-weight:400;
      font-size: 14px;
   }
   .user:hover{
      text-decoration: underline;
      cursor: pointer;
   }
   .out:hover {
      text-decoration: underline;
      cursor: pointer;
   }
   .responsive{
      display: none;
      flex-direction: column;

      position: absolute;
      top: 3.2rem;
      right: 1px;
      left: 1px;

      justify-content: center;
      
      width: 100%;
      height: 400px;
      
      background-color: var(--grey-9) ;
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
      border-radius: 0px 0px 4px 0px;

      color:var(--grey-2) ;
      font-weight: 400;
      font-size: 21px;

   }
   .responsive-top{
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: space-evenly;

     width: 100%;
     height: 70%;
    
     padding: 10px;
   }
  .responsive-bottom{
      
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      height: 30%;
      border-top: 2px solid var(--grey-4);

      align-items: center;
       

   }
   @media screen and (max-width: 800px) {
      width: 100vw;
      
     .right{
      
      border-right: none;
      
      width: 100%; 

      display: flex;

     }
     .divLogo{
      display: flex;
      justify-content: space-evenly ;
     }
     .nav{
       display: none;
     }
     .left{
       display: none;
     }
     .icon{
      display: flex;
      
      cursor: pointer;
     }
     .buttom-Responsive{
       width: 80%;

       border: var(--grey-6) solid 2px;
     }
     .Login-responsive{
      width: 100%;

      margin-left: 20px;
      display: flex;
     }
}
   
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700&display=swap');;

`;


