import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
`;
export const ContainerBackground = styled.div`
    width: 70%;
    @media screen and (max-width:780px){
        display: none;
    }
`;
export const ContainerLoginBox = styled.div`
    width: 30%;
    background-color: ${props => props.theme['gray-800']};
        @media screen and (max-width:780px){
        width: 100%;
    }
    div{
        display: grid;
        grid: 1;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        section{
            display: grid;
            gap: 1rem;
            span{
                display: flex;
                align-items: center;
            }
            p{
                color:${props => props.theme['gray-400']};
            }
        }
        nav{
            display: grid;
            gap: 1rem;
            form{
                display: grid;
                gap: 1rem;
                width: 100%;
                input{
                    padding: 1rem;
                    border: 1px solid ${props => props.theme['gray-700']};
                    background-color: ${props=>props.theme['gray-900']};
                    border-radius: 4px;
                }
                button{
                    &:hover{
                        opacity: calc(80%);
                    }
                    cursor: pointer;
                    font-weight: 800;
                    padding: 1rem;
                    background-color: ${props => props.theme['green-500']};
                    border: none;
                    border-radius: 4px;
                }
            }
            button{
                 &:hover{
                        opacity: calc(80%);
                    }
                font-weight: 800;
                font-size: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                cursor: pointer;
                background-color: ${props => props.theme['gray-700']};
                color: ${props=>props.theme['gray-200']};
                padding: 1rem;
                border: none;
                border-radius: 4px;
            }
            span{
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: space-between;
                gap:1rem;
                button{
                    background-color: ${props => props.theme['green-700']};
                }
            }
        }
    }

`;
export const ContainerImage = styled(Image)`
    background-position: center;
    background-size: contain;
    width: 100%;
    height: auto;
    
`;