import { ListChat } from "./containerchat";
import { Search } from "./searchFriends";
import { ContainerChat, ContainerGeneral } from "./style";

export function ChatInRealTime() {
    return (
        <>
            <ContainerGeneral>
                <Search />
                <ContainerChat>
                    <ListChat />
                    <ListChat />
                    <ListChat />
                    <ListChat />
                    <ListChat />
                    <ListChat />
                </ContainerChat>
            </ContainerGeneral>
        </>
    )
}