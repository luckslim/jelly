import { ButtonNot, ButtonYes, ContainerCardInvite, ContainerCardTitle, ContainerGeneral, ContainerTextDescription, DisplayButtons } from "./style";
import { Profiler } from "../profiler";
import { CheckCircleIcon, EnvelopeIcon, ProhibitIcon } from "@phosphor-icons/react";

export function FriendRequest(){
    return(
        <>
            <ContainerGeneral>
                <ContainerCardTitle>Solicitações de Amizade <EnvelopeIcon size={22} weight="light" /></ContainerCardTitle>
                <ContainerCardInvite>
                    <Profiler name="Lucas Soares" urlImage="https://avatars.githubusercontent.com/u/95627552?v=4" message="Aceitar Pedido?"/> 
                    <DisplayButtons>
                        <ButtonNot><ProhibitIcon size={22} weight="bold" /></ButtonNot>
                        <ButtonYes><CheckCircleIcon size={22} weight="bold" /></ButtonYes>
                    </DisplayButtons>                
                </ContainerCardInvite>
            </ContainerGeneral>
        </>
    )

}