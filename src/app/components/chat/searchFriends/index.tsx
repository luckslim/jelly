import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { ContainerSearch, InputSearch } from "./style";

export function Search(){
    return (
        <>
            <ContainerSearch>
                <MagnifyingGlassIcon size={22}/>
                <InputSearch type="text" />
            </ContainerSearch>
        </>
    )
}