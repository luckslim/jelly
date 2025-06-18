import styled from "styled-components";

export const ContainerButtonIncrement = styled.button`
    display: flex;
    gap: 1rem;
    background-color:${props => props.theme['gray-500']};
    color: ${props => props.theme['gray-100']};
    font-weight: 500;
    border: none;
    border-radius: 2px;
    padding: 0.2rem;
    cursor: pointer;
    &:hover{
        opacity: 80%;
    }
`;