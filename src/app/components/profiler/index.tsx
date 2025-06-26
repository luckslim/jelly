import { BoxSpanProfiler, ContainerProfiler } from "./style";
type Props = {
    name?: string;
    userName?: string;
    urlImage?: string;
    message?: string;
}
export function Profiler({name, userName, urlImage, message}:Props){
    return(
        <>
         <ContainerProfiler>
            <img src={urlImage} alt="" />
            <BoxSpanProfiler>
                {name}
                <small>{userName}</small>
                <small>{message}</small>
            </BoxSpanProfiler>
         </ContainerProfiler>
        </>
    )
}