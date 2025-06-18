import styled from "styled-components";
export const ContainerGeneral = styled.form`
    display: grid;
    gap: 1rem;
`;
export const Textarea = styled.textarea`
max-width: 450px;
min-width: 450px;
max-height: 100px;
min-height: 100px;
border:none;
background-color: ${props=>props.theme['gray-900']};
color: ${props=>props.theme['gray-100']};
border-radius: 8px;
height: 60px;
padding: 1rem;
&::placeholder{
text-align: start;
}
`;