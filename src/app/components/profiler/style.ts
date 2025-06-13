import styled from "styled-components";

export const ContainerProfiler = styled.div`
    display: flex;
    gap: 1rem;
    img{
        display: flex;
        width: 50px;
        border-radius: 8px;
    }
`;
export const BoxSpanProfiler = styled.span`
    display: grid;
    color: ${props=>props.theme['gray-100']};
    font-weight: 800;
    small{
        color: ${props=>props.theme['gray-400']};

    }
`;