
import Image from "next/image";
import githubIcon from '../../../../assets/images/github.png'
import { ContainerTag, ContainerTagName } from "./style";
type Props = {
    tagName:string;
}
export function TagImage({tagName}:Props){
    return(
        <>
            <ContainerTag>
                <ContainerTagName>{tagName}</ContainerTagName>
                <Image src={githubIcon} alt=""/>
            </ContainerTag>
        </>
    )
}