import styled from "styled-components";
import Offcanvas  from "react-bootstrap/Offcanvas";
export const ContainerChatProfiler = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    grid: 1;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        background-color: ${props=>props.theme['gray-900']};
    }
`;
export const StyleOffCanvas = styled(Offcanvas)`
    background-color:${props=>props.theme['gray-800']};
    color: ${props=>props.theme['gray-300']};
`;
export const ContainerChatMessage = styled.div`
    display: grid;
    gap: 0.5rem;
`;
export const ContainerSendMessage = styled.div``;
export const ContainerTextArea = styled.textarea`
    background-color: ${props=>props.theme['gray-900']};
    color: ${props=>props.theme['gray-300']};
    border-color: ${props=>props.theme['gray-700']};
    border-radius: 4px;
    width: 100%;
    height: 100px;
`;