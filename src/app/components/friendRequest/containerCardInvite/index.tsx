import { CheckCircleIcon, ProhibitIcon } from "@phosphor-icons/react";
import { Profiler } from "../../profiler";
import { ButtonNot, ButtonYes, ContainerCardInvite as ContainerInvite, DisplayButtons } from "./style";

export function ContainerCardInvite() {
    return (
        <>
            <ContainerInvite>
                <Profiler name="Lucas Soares" urlImage="https://avatars.githubusercontent.com/u/95627552?v=4" message="Aceitar Pedido?" />
                <DisplayButtons>
                    <ButtonNot><ProhibitIcon size={22} weight="bold" /></ButtonNot>
                    <ButtonYes><CheckCircleIcon size={22} weight="bold" /></ButtonYes>
                </DisplayButtons>
            </ContainerInvite>
        </>
    )
}