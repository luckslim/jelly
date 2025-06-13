import styled from "styled-components";
export const ContainerProvider = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 1rem;
`;
export const ContainerFeed = styled.div`
    width: 40%;
    display: grid;
    justify-content: center;
    align-items: center;
`;
export const ContainerSideBar = styled.div`
    display: grid;
    grid: 1;
    gap: 1rem;
    padding: 1rem;
`;
export const ContainerExplorer = styled.div`
    display: grid;
    grid: 1;
    gap: 1rem;
    justify-content: center;
    span{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    button{
        background-color: ${props => props.theme['gray-100']};
        border: none;
        padding: 0.2rem;
        color: ${props => props.theme['gray-900']};
        font-weight: 800;
        border-radius: 8px;
        }
`;
