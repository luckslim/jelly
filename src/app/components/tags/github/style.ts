import styled from "styled-components";

export const ContainerTag = styled.span`
    display: flex;
    flex:1;
    width:280px;

    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    background-color: ${props => props.theme['gray-100']};
    padding: 0.3rem;
    border-radius: 4px;

`;
export const ContainerTagName = styled.p`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 0.2rem;
    color: ${props => props.theme['gray-900']};
`;

