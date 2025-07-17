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
    a{
        background-color: ${props=>props.theme['gray-100']};
        color: ${props=>props.theme['gray-900']};
        text-decoration: none;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0.5rem;
        border-radius: 4px;
        width: 200px;
    }
    img{
        width: 100%;
        border-radius: 8px;
    }
    p{
        color: ${props=>props.theme['gray-400']};
    }
`;
export const ButtonFriendly = styled.button`
    background-color: ${props=>props.theme['green-500']};
    color: ${props=>props.theme['gray-900']};
    font-weight: 800;
    padding: 1px 1rem;
    border: none;
    border-radius: 4px;
    &:hover{
        opacity: 70%;
    }
`;
export const ContainerFooterPosts = styled.div``;
export const ContainerResponses =styled.div`
    display: grid;
    gap: 1rem;
    border-top: 1px solid ${props=>props.theme['gray-600']};
    padding: 1rem;
`;
export const ContainerResponseDonate = styled.div`
    display: flex;
    flex: 1;
`;
export const ContainerResponsesComments = styled.div`
 display: flex;
 flex:1;
 justify-content: center;
`;
