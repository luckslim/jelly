import styled from "styled-components";
export type MessageTypeProps = 'ProfilerFriend'|'ProfilerMe'
export type Props = {
    type?: MessageTypeProps;
}
export const ContainerGeneral = styled.button<Props>`
    display: flex;
    background-color: transparent;
    border: none;
    justify-content: ${({type})=>type == 'ProfilerFriend' ? 'end' : 'start'};
`;
export const ContainerMessage = styled.button<Props>`
    background-color: ${({theme, type})=> type === 'ProfilerFriend' ? theme['gray-100'] : theme['violet-500']};
    color:${({theme, type})=> type === 'ProfilerFriend' ? theme['gray-900'] : theme['gray-100']};
    padding-left: 1rem;
    border-radius: 4px;
    border: none;
    padding: 0.2rem;
    font-weight: 500;
`;