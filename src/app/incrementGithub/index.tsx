import { Button } from "../components/button";
import { ButtonIncrement } from "../components/buttonincrement";
import { Input } from "../components/input";
import { ContainerGeneral, ContainerInput } from "./style";

export function IncrementGithub(){
    return(
        <>
        <ContainerGeneral>
            <ButtonIncrement nameButton="Confirmar Github"/>
            <ContainerInput/>
        </ContainerGeneral>
        </>
    )
}