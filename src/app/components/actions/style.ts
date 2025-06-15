import styled from "styled-components";

export const ActionProvider = styled.main`
display:flex;
justify-content: space-between;
`;
export const BoxActionIcons = styled.div`
display: flex;
gap: 1rem;
align-items: center;
div{
    display: flex;
    align-items: center;
    gap: 0.2rem;
    span{
        color: ${props=>props.theme['green-500']};
    }
};
`;