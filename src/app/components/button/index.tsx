import { ContainerButtonProvider, TypePropsButton } from "./style"

type Props ={
    title: String;
    type: TypePropsButton;
}
export function Button({title, type}:Props){
    return(
        <>
        <ContainerButtonProvider type={type} >
            {title}
        </ContainerButtonProvider>
        </>
    )
}