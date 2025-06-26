import { ListChat } from "./containerchat";
import { Search } from "./searchFriends";
import { ContainerGeneral } from "./style";

export function ChatInRealTime(){
    return(
        <>
            <ContainerGeneral>
                <Search/>
                <ListChat/>
            </ContainerGeneral>
        </>
    )
}