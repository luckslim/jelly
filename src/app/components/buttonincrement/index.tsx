import { ContainerButtonIncrement } from "./style";
type Props ={
    nameButton: string;
}
export function ButtonIncrement({nameButton}:Props){
    return(
        <>
            <ContainerButtonIncrement type="submit">
                {nameButton}
            </ContainerButtonIncrement>
        </>
    )
}