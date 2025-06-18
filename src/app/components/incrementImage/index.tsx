import { X, XIcon } from "@phosphor-icons/react";
import { ButtonIncrement } from "../buttonincrement";
import { ContainerGeneral } from "./style";
type Props ={
    typeFile?:string;
    nameButton:string
}
export function IncrementTagImage({typeFile, nameButton}:Props) {
    return (
        <>
            <ContainerGeneral>
                <ButtonIncrement nameButton={nameButton} />
                <p>{typeFile}</p>
                <XIcon size={15} weight="thin" color="red"/>
            </ContainerGeneral>
        </>
    )
}