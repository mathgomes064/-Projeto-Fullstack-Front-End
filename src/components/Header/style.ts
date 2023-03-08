import styled, { keyframes } from "styled-components";

export const HeadeMain = styled.header`
width: 100vw;
height: 60px;
background-color: var(--grey-10); 
display: flex;
justify-content: center;
align-items: center;


    .container{
        width: 95%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center; 

        img{
            cursor: pointer;
        }
    }

    .buttonSection{
        width: 50%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .productLinks{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 50%;
        height: 60px;
    }
    
    .productLinks > a{
        color: var(--grey-2);
        font-size: 16px;
        text-decoration: none;
        position: relative;
        height: 20px;
        font-weight: bold;
        
        ::after{
            content: " ";
            width: 0%;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 0.3s ease-in-out;
        }
        
        :hover::after{
            width: 100%;
            background-image: linear-gradient(to bottom right, #5126ea, #b0a6f0);
        }
    }
    
    .buttons{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 50%;
        height: 60px;
        border-left: 1px solid var(--grey-6);
        
        button:hover{
            background-color: var( --black);
            color: var(--white);
            transition: 144ms;
        }
    }
    
    .buttons > button{
        border: 1px solid var(--grey-4);
        background-color: transparent;
        color: var(--black);
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
    }
    
    .dropdown{
        color: black;
    }

    .userInfo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 60px;
        border-left: 1px solid var(--grey-6);
    }

    .userInfo > div{
        width: 70%;
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .userInfo > div > .userImg{
        width: 42px;
        height: 42px;
        border-radius: 100px;
    }

    .userInfo > div > h1{
        color: var(--grey-2);
        font-size: 17px;
        text-decoration: none;
        position: relative;
        height: 20px;
        cursor: pointer;
        
        ::after{
            content: " ";
            width: 0%;
            height: 2px;
            background-color: var(--grey-2);
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 0.3s ease-in-out;
        }
        
        :hover::after{
            width: 100%;
            background-image: linear-gradient(to bottom right, #5126ea, #b0a6f0);
        }

    
    }

    .profilePic{
        background-image: linear-gradient(to bottom right, #5126ea, #b0a6f0);
        width: 45px;
        height: 45px;
        border-radius: 50px;
        color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        font-weight: 500;
        text-align: center;
    }

    .userDropDown{
      position: absolute;
      right: 2rem;
      top: 2.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 170px;
      height: 250px;
      
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

   .options{
      color: var(--grey-2);
        font-size: 16px;
        text-decoration: none;
        position: relative;
        height: 20px;
        cursor: pointer;
        
        ::after{
            content: " ";
            width: 0%;
            height: 2px;
            background-color: var(--grey-2);
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 0.3s ease-in-out;
        }
        
        :hover::after{
            width: 100%;
            background-image: linear-gradient(to bottom right, #5126ea, #b0a6f0);
        }
   }

   .dropdown{
    display: none;
   }
   

    @media screen and (max-width: 1083px){

        .buttonSection{
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .dropdown{
            font-size: 28px;
            display: flex;
        }

        .productLinks{
            display: none;
        }

        .buttons{
            display: none;
        }

        .userInfo{
            display: none;
        }

        .userItemsDropDown{
            position: absolute;
            right: 2rem;
            top: 2.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 170px;
            height: 200px;
            
            background-color: var(--grey-9) ;
            box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
            border-radius: 4px;

            color:var(--grey-2) ;
            font-weight: 400;
            font-size: 14px;
        }

        .userItemsDropDown > ol{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .userItemsDropDown > ol > li{
            width: 150px;
            height: 30px;
            text-align: start;
        }

        .userItemsDropDown > ol > .upperLine{
            width: 170px;
            border-top: 1px solid var(--grey-4);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .userItemsDropDown > ol > .upperLine > a{
            width: 160px;
            color:var(--grey-2) ;
        }

        .userItemsDropDown > ol > button{
            width: 90%;
            background-color: transparent;
            border: 1px solid var(--grey-4);
            color: var(--black);
            border-radius: 4px;
            font-weight: bold;
        }
    }
`

export const Container = styled.div`
width: 250px;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;;
align-items: center;
background-color: white;
color: black;
gap: 30px;

    .outsideDiv{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;;
        align-items: center;
    }

    .upperDiv{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;;
        align-items: center;
    }

    .lowerDiv{
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;;
        align-items: center;
    }

    div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .options{
        display: flex;
        flex-direction: column;
        justify-content: center;;
        align-items: center;
        width: 90%;
        height: 50px;
        text-align: center;
        color: var(--brand-2);
        font-size: 16px;
        text-decoration: none;
        position: relative;
        cursor: pointer;
        border-radius: 4px;
        border: 1.5px solid var(--brand-1);
        font-weight: bold;
        
        :hover{
            transition: all 0.4s;
            background-image: linear-gradient(to bottom right, #5126ea, #b0a6f0);
            border: 1.5px solid var(--brand-1);
            color: var(--white);
            border: none;

        }

    }
`