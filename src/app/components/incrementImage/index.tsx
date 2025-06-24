import {XIcon } from "@phosphor-icons/react";
import { ButtonIncrement } from "../buttonincrement";
import { ContainerGeneral, IncrementimageInput } from "./style";
type Props ={
    typeFile?:string;
    nameButton:string
}
export function IncrementTagImage({nameButton}:Props) {
    return (
        <>
            <ContainerGeneral>
                <ButtonIncrement nameButton={nameButton} />
                <IncrementimageInput accept="image/*" type="file"  />
                <XIcon size={15} weight="thin" color="red"/>
            </ContainerGeneral>
        </>
    )
}