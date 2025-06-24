import styled from "styled-components";

export const ContainerGeneral = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    color: ${props=>props.theme['green-500']};
    font-size: small;
    font-weight: 100;
`;
export const IncrementimageInput =styled.input`
    background-color: ${props=>props.theme['gray-600']};
    padding: 0.2rem;
    border-radius: 4px;
    width: 200px;
`;