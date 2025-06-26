import styled from "styled-components";

export const ContainerSearch = styled.div`
    background-color: ${props=>props.theme['gray-700']};
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1rem;
`;
export const InputSearch = styled.input`
    background-color: ${props=>props.theme['gray-900']};
    color: ${props=>props.theme['gray-200']};
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
`;
