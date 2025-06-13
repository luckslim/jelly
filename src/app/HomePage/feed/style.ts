import styled from "styled-components";
export const ContainerGeneral =styled.div`
    display: grid;
    gap: 3rem;
`;
export const ContainerFeedProvider = styled.main`
    display: grid;
    gap: 1rem;
    justify-content: center;
    border: 1px solid ${props=>props.theme['gray-600']};
    border-radius: 8px;
    padding: 1rem;
    width: 500px;
`;
export const ContainerPostsProvider = styled.div`
    width: 500px;
`;