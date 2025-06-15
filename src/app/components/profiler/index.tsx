import { BoxSpanProfiler, ContainerProfiler } from "./style";
type Props = {
    name: string;
    userName: string;
    urlImage: string;
}
export function Profiler({name, userName, urlImage}:Props){
    return(
        <>
         <ContainerProfiler>
            <img src={urlImage} alt="" />
            <BoxSpanProfiler>
                {name}
                <small>{userName}</small>
            </BoxSpanProfiler>
         </ContainerProfiler>
        </>
    )
}