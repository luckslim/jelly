import Image from "next/image";
import { BoxSpanProfiler, ContainerProfiler } from "./style";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
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