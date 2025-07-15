import styled from "styled-components";

export const ContainerPulseCoins = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    background: ${props=>props.theme['gray-900']};
    padding: 1rem;
    h3{
        display: flex;
        align-items: center;
        color: ${props=>props.theme['gray-100']};
        font-weight: 800;
    }
    p{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export const ContainerDescription = styled.div``;