import styled from "styled-components";
export const ContainerSideBarProfiler = styled.div`
    display: grid;
    gap: 0.5rem;
`;
export const DisplayCoins = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        display: flex;
        gap: 0.5rem;
        color: ${props=>props.theme['gray-100']};
        align-items: center;
    }
`;