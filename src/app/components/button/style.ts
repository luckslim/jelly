import styled from "styled-components";
export type TypePropsButton = 'PRIMARY'|'SECONDARY';
type Props = {
    type:TypePropsButton;
}
export const ContainerButtonProvider = styled.button<Props>`
    padding:0.5rem;
    background-color:${({theme,type})=> type === 'PRIMARY' ? theme['gray-900']: theme['gray-100']};
    color:${({theme,type})=> type === 'PRIMARY' ? theme['gray-100']: theme['gray-900']};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 800;
    &:hover{
        opacity: calc(80%);
    }
`;