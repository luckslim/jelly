import { ContainerTag, ContainerTagName } from "./style";
import Image from "next/image";
import githubIcon from "../../../../../assets/images/github.png";
import { GitBranchIcon, XCircleIcon } from "@phosphor-icons/react";
type Props = {
  tagName: string;
  onclick?: ()=>void;
};
export function TagGithub({ tagName, onclick }: Props) {
  return (
    <>
      <ContainerTag>
        <ContainerTagName>
          {tagName}
          <GitBranchIcon size={20} />
        </ContainerTagName>
        <Image width={20} src={githubIcon} alt="" />
        <XCircleIcon onClick={onclick} color="red" size={20} />
      </ContainerTag>
    </>
  );
}
