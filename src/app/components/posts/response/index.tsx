import { HeartIcon } from "@phosphor-icons/react";
import { Actions } from "../../actions";
import { Profiler } from "../../profiler";
import {
  ContainerResponse,
  ContainerResponseProfiler,
  ContainerResponseText,
} from "./style";
type Props ={
  name: string;
  userName: string;
  urlImage: string;
  textProfile:string;
}
export function Response({name,userName,urlImage,textProfile}:Props) {
  return (
    <>
      <ContainerResponse>
        <ContainerResponseProfiler>
          <Profiler
            name={name}
            userName={userName}
            urlImage={urlImage}
          />
          <Actions icons={[{icon: HeartIcon ,text:"20"}]}/>
        </ContainerResponseProfiler>
        <ContainerResponseText>
          {textProfile}    
        </ContainerResponseText>
      </ContainerResponse>
    </>
  );
}
