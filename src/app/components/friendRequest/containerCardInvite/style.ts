import styled from "styled-components";

export const ContainerCardInvite = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid ${props=>props.theme['gray-700']};
    border-radius: 4px;
    padding: 1rem;
`;
export const DisplayButtons = styled.div`
    display: flex;
    height: fit-content;
    align-items: center;
`;
export const ButtonYes = styled.button`
    background-color: ${props=>props.theme['green-700']};
    color: ${props=>props.theme['gray-900']};
    font-weight: 800;
    border: none;
    padding: 0.4rem;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
            &:hover{
        background-color: ${props=>props.theme['green-500']};
    } 

`;
export const ButtonNot = styled.button`
    background-color: ${props=>props.theme['red-700']};
    color: ${props=>props.theme['gray-900']};
    font-weight: 800;
    border: none;
    padding: 0.4rem;
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
    &:hover{
        background-color: ${props=>props.theme['red-500']};
    }    
`;