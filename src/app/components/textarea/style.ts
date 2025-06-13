import styled from "styled-components";

export const Textarea = styled.textarea`
max-width: 450px;
min-width: 450px;
max-height: 100px;
min-height: 100px;
border: 1px solid ${props => props.theme['gray-500']};
background-color: ${props=>props.theme['gray-800']};
color: ${props=>props.theme['gray-100']};
border-radius: 8px;
height: 60px;
padding: 1rem;
&::placeholder{
text-align: center;
}
`;