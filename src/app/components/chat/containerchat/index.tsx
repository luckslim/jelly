import { Profiler } from "../../profiler";
import { ContainerChatProfiler } from "./style";

export function ListChat() {
    return (
        <>
            <ContainerChatProfiler>
                <Profiler name="lucas" urlImage="https://avatars.githubusercontent.com/u/95627552?v=4" message="ola tudo bem!"/>
            </ContainerChatProfiler>
        </>
    )
}