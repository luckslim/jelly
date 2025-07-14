import styled from "styled-components";

export const ContainerTag = styled.span`
    display: flex;
    flex:1;
    width:280px;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    padding: 0.5rem;
    background-color: ${props => props.theme['gray-100']};
    border-radius: 4px;

`;
export const ContainerTagName = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 0.2rem;
    color: ${props => props.theme['gray-900']};
`;

