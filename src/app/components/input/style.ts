import styled from "styled-components";

export const ContainerInput = styled.input`
    padding: 1rem;
    border: 1px solid ${props => props.theme['gray-700']};
    background-color: ${props => props.theme['gray-900']};
    color:${props => props.theme['gray-100']};
    border-radius: 4px;
    width: 60%;
`;
export const ContainerFormProvider =styled.form`
display: flex;
gap: 1rem;
width: 100%;
`;