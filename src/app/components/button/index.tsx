import { ContainerButtonProvider, TypePropsButton } from "./style"

type Props ={
    title?: String;
    type: TypePropsButton;
    onclick?: ()=>void;
    disabled?:boolean;
}
export function Button({title, type, onclick}:Props){
    return(
        <>
        <ContainerButtonProvider onClick={onclick}  type={type} >
            {title}
        </ContainerButtonProvider>
        </>
    )
}