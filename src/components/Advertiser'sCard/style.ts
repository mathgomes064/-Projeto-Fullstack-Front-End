import styled from "styled-components"

export const Container = styled.section`
 
   background-color: var(--grey-10);

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;

   width: 400px;
   height: 370px;

   margin-top: 30px;

   border-radius: 4px;

   font-family: 'Inter', sans-serif;
   color: var(--grey-1);

   .userPhoto{
      background-color: var(--brand-1);
      width: 100px;
      height: 100px;
      border-radius:50% ;
   }
   .descriptionCard{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      width: 60%;
      height: 50%;
   }
   

   p{
      text-align: center;
      line-height: 150%;

   }
   .userCard{
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      > p{
         font-weight: 600;
         font-size: 17px;
      }
      height: 35%;
   }
   button{
      background-color: var(--grey-1);
      color: var(--grey-10);

      font-size: 12px;
      font-weight: 600;
      
      width: 75%;
      height: 23%;

   }
` 