import styled from "styled-components";

export const ContainerGeneral = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    color: ${props=>props.theme['green-500']};
    font-size: small;
    font-weight: 100;
`;