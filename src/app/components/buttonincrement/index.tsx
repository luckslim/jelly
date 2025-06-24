import { ContainerButtonIncrement } from "./style";
type Props ={
    nameButton: string;
    onclick?: ()=>void;
}
export function ButtonIncrement({nameButton, onclick}:Props){
    return(
        <>
            <ContainerButtonIncrement onClick={onclick} type="submit">
                {nameButton}
            </ContainerButtonIncrement>
        </>
    )
}