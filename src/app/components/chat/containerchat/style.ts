import styled from "styled-components";

export const ContainerChatProfiler = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    grid: 1;
    padding: 1rem;
    border-radius: 8px;
    &:hover{
        background-color: ${props=>props.theme['gray-900']};
    }
`;