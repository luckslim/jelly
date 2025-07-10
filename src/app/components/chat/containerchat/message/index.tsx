import { ContainerGeneral, ContainerMessage, MessageTypeProps } from "./style";
type MessageProps = {
    text: string;
    type?: MessageTypeProps;
}
export function Message({text, type}: MessageProps) {
    return (
        <>
            <ContainerGeneral type={type}>
                <ContainerMessage type={type} >
                    {text}
                </ContainerMessage>
            </ContainerGeneral>
        </>
    )
}