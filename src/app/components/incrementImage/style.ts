import Image from "next/image";
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
export const IncrementimageInput =styled.input`
    background-color: ${props=>props.theme['gray-600']};
    padding: 0.2rem;
    border-radius: 4px;
    width: 200px;
`;
export const ImageContainer = styled(Image)`
    background-color:${props=>props.theme["gray-700"]} ;
    padding: 0.2rem;
    padding-top: 1rem;
    border-radius: 4px;
    &:hover{
        opacity: calc(80%);
    }
`;