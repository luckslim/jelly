import { StudentIcon } from "@phosphor-icons/react";
import styled from "styled-components";
export const ContainerGeneral = styled.div`
display: grid;
justify-content: center;
gap: 1rem;
`;
export const ContainerErrors = styled.small`
    color: ${props=>props.theme['red-500']};
`;
export const ContainerInput = styled.input`
    padding: 1rem;
    border: 1px solid ${props => props.theme['gray-700']};
    background-color: ${props => props.theme['gray-900']};
    color:${props => props.theme['gray-100']};
    font-weight: 800;
    border-radius: 4px;
    width: 60%;
`;
export const ContainerFormProvider =styled.form`
display: flex;
gap: 1rem;
width: 100%;
`;