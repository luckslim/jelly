import styled from "styled-components";

export const ContainerGeneral = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    gap: 1rem;
`;
export const ContainerInput =styled.input`
    background-color: ${props=>props.theme['gray-900']};
    color: ${props=>props.theme['green-500']};
    width: 60%;
    border: none;
    padding: 0.25rem;
    border-radius: 4px;
`;