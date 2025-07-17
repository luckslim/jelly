import styled from "styled-components";

export const ContainerGeneral = styled.div`
    display: grid;
    gap: 1rem;
    background-color: ${props=>props.theme['gray-900']};
    padding: 1rem;
    border-radius: 4px;

`;
export const ContainerCardInvite = styled.div`
    display: flex;
    gap: 1rem;
    border: 1px solid ${props=>props.theme['gray-700']};
    border-radius: 4px;
    padding: 1rem;
`;
export const ContainerTextDescription = styled.div``;
export const DisplayButtons = styled.div`
    display: flex;
`;
export const ButtonYes = styled.button`
    background-color: ${props=>props.theme['green-500']};
    color: ${props=>props.theme['gray-900']};
    font-weight: 800;
    border: none;
    padding: 0.4rem;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;

`;
export const ButtonNot = styled.button`
    background-color: ${props=>props.theme['red-500']};
    color: ${props=>props.theme['gray-900']};
    font-weight: 800;
    border: none;
    padding: 0.4rem;
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;    
`;
export const ContainerCardTitle = styled.div`
    display: flex;
    gap: 1rem;
    width: 80%;
    justify-content: center;
    background-color: ${props=>props.theme['gray-100']};
    color: ${props=>props.theme['gray-900']};
    font-weight: 600;
    border-radius: 9999px;
`;