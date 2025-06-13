import styled from "styled-components";

export const ContainerPostProvider = styled.div`
    display: grid;
    text-align: start;
    grid: 1;
    gap: 1rem;
    border-top: 1px solid ${props=>props.theme['gray-600']};
    padding-top: 1rem;
`;
export const ContainerHeaderPosts = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const ContainerBodyPosts = styled.div`
    display: grid;
    gap: 1rem;
    img{
        width: 100%;
    }
    p{
        color: ${props=>props.theme['gray-400']};
    }
`;
export const ContainerFooterPosts = styled.div``;
