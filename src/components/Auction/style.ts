import styled from "styled-components"
import background from "../../assets/backgroundcardauction.svg";

export const Auction = styled.section`
width: 94vw;
height: 550px;
margin-top: 100px;


    .tittleDiv{
        width: 94vw;
        height: 100px;
        display: flex;
        align-items: center
    }

    .tittleDiv > h1{
        font-size: 24px;
        color: var(--black);
        margin-left: 20px;
        font-weight: bold;
    }

    .container{
        background-image: url(${background});
        background-position: center;
        background-repeat: no-repeat;
        background-color: var(--white);
        max-width: 650px;
        height: 388px;
        margin: 0px 20px;
        color: black;
        border-radius: 4px;
        cursor: pointer;
        

        :hover{
            .footerCard > div{
                display: flex;
                justify-content: flex-end;
                align-items: center;  
            }
        }


    }

    .body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
        border-radius: 3px;

        .content{
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .timeDiv{
                width: 93%;
                height: 80px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }

            .timeDiv > .timer {
                width: 123px;
                height: 36px;
                background: var(--white);
                border-radius: 32px;
                display: flex;
                align-items: center;
                justify-content: center;

                    .clock{
                        color: var(--brand-1);
                        font-size: 25px;
                    }
         
                    span {
                        color: #212529;
                        margin-left: 14px;
                    }
            }

            .title {
                width: 93%;
                height: 30px;
                font-weight: 600;
                font-size: 20px;
                line-height: 25px;
                color: var(--white);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .description {
                font-style: normal;
                width: 93%;
                height: 50px;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                color: var(--white);
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }

            .profile {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 93%;
                height: 50px;

                div{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 150px;
                    height: 50px;
                }

                img{
                    border-radius: 100px;
                    width: 32px;
                    height: 32px;
                }

                span{
                    color: var(--white)
                }

            }

            .specifications {
                width: 93%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;

                .innerFooterSpecifications{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .innerFooterSpecifications > .innerDiv{
                    display: flex;
                    flex-direction: column;
                    height: 70px;
                }

                .innerFooterSpecifications > .innerDiv > .responsivePrice{
                    display: none;
                }

                @media (max-width: 700px) {
                    .innerFooterSpecifications > .innerDiv > .responsivePrice{
                        display: block;
                    }

                    .innerFooterSpecifications > .desktopPrice{
                        display: none;
                    }
                }

                .innerFooterSpecifications > .innerDiv > div{
                    width: 110px;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    span {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        width: 50px;
                        height: 32px;
                        background: var(--brand-4);
                        border-radius: 4px;
                        color: var(--brand-1);
                    }
                }

                .responsivePrice{
                    font-weight: bold;
                    color: var(--white)
                }

                .desktopPrice{
                    font-weight: bold;
                    color: var(--white)
                }

            }

                
        }

        .footerCard {
            background-image: linear-gradient(to bottom right, #5126ea, #7000ff);            
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 100%;
            height: 50px;
            padding-left: 30px;
            padding-right: 30px;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;

            h1{
                color: var(--white)
            }
            
            div{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 40px;
                height: 100%;
            }

            .rightArrow{
                color: var(--white);
                font-size: 25px;

            }


        }

        :hover{
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
        }

    }



    /* @media (max-width: 375px) {
        width: 285px;
        height: 435px;
        background-size: 275px;
        background-repeat: no-repeat;
        span {
        font-size: 10px;
        }
  } */

`