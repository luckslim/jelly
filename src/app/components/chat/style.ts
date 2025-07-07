import styled from "styled-components";

export const ContainerGeneral =styled.div`
    display: grid;
    grid: 1;
    gap: 0.5rem;
    border-radius: 4px;
    border: 1px solid ${props=>props.theme['gray-700']};
    padding: 1rem;
`;
export const ContainerChat = styled.div`
    height: 320px;
    overflow-y: auto;
    padding-right:1rem;
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