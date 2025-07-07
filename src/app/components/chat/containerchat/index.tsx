import { ArrowLineRightIcon } from "@phosphor-icons/react";
import { Profiler } from "../../profiler";
import { ContainerChatProfiler } from "./style";

export function ListChat() {
    return (
        <>
            <ContainerChatProfiler>
                <Profiler name="Lucas Soares" urlImage="https://avatars.githubusercontent.com/u/95627552?v=4" message="ola tudo bem!"/>
                <ArrowLineRightIcon size={22} weight="thin" />
            </ContainerChatProfiler>
        </>
    )
}