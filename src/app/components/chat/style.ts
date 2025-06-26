import styled from "styled-components";

export const ContainerGeneral =styled.div`
    display: grid;
    grid: 1;
    gap: 1rem;
    border-radius: 4px;
    border: 1px solid ${props=>props.theme['gray-700']};
    padding: 1rem;
`;