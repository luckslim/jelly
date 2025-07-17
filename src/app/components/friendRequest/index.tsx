import { ContainerCardInvite } from "./containerCardInvite";
import { ContainerCardTitle, ContainerGeneral, ContainerGeneralCards } from "./style";
import { EnvelopeIcon } from "@phosphor-icons/react";

export function FriendRequest() {
    return (
        <>
            <ContainerGeneral>
                <ContainerCardTitle>Solicitações de Amizade <EnvelopeIcon size={22} weight="light" /></ContainerCardTitle>
                <ContainerGeneralCards>
                    <ContainerCardInvite />
                    <ContainerCardInvite />
                    <ContainerCardInvite />
                    <ContainerCardInvite />
                    <ContainerCardInvite />
                    <ContainerCardInvite />
                </ContainerGeneralCards>
            </ContainerGeneral>
        </>
    )

}