import styled from "styled-components";

export const ContainerResponse = styled.div`
    display: grid;
    gap: 1rem;
    padding: 1rem;
    background-color: ${props=>props.theme['gray-900']};
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
`;
export const ContainerResponseProfiler = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between ;
`;
export const ContainerResponseText = styled.p`
    color:${props=>props.theme['gray-400']};
    text-align: start;
`;