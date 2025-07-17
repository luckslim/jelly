import styled from "styled-components";

export const ContainerGeneral = styled.div`
    display: grid;
    gap: 1rem;
    background-color: ${props=>props.theme['gray-900']};
    padding: 1rem;
    border-radius: 4px;

`;

export const ContainerTextDescription = styled.div``;


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
export const ContainerGeneralCards = styled.div`
    display: grid;
    gap: 0.5rem;
    grid:1;
    height: 270px;
    padding-right: 1rem;
    overflow-y: scroll;
        &::-webkit-scrollbar{
        background-color: ${props=>props.theme['gray-500']};
        border-radius: 4px;
        width: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props=>props.theme['gray-100']};
        border-radius: 4px;
    }
`;