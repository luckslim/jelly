import { CurrencyCircleDollarIcon, DotsThreeOutlineVerticalIcon, HeartIcon, ShareNetworkIcon } from "@phosphor-icons/react";
import { Profiler } from "../profiler";
import { ContainerBodyPosts, ContainerFooterPosts, ContainerHeaderPosts, ContainerPostProvider } from "./style";
import { Actions } from "../actions";

export function Posts() {
  return (
    <>
      <ContainerPostProvider>
        <ContainerHeaderPosts>
          <Profiler
            name="Lucas Soares"
            userName="@lucasdfjso"
            urlImage="https://avatars.githubusercontent.com/u/95627552?v=4"
          />
          <DotsThreeOutlineVerticalIcon size={22} />
        </ContainerHeaderPosts>
        <ContainerBodyPosts>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, expedita provident tempore soluta, beatae aliquid
            impedit blanditiis neque laudantium corrupti dolorum atque eaque,
            eius a commodi? Aliquid sit qui nam?
          </p>
          <img src="https://repinte.com.br/wp-content/uploads/2019/02/269135-conheca-os-x-predios-mais-bonitos-do-mundo.jpg" alt="" />
        </ContainerBodyPosts>
        <ContainerFooterPosts>
            <Actions title="Responder" icons={[HeartIcon, ShareNetworkIcon, CurrencyCircleDollarIcon]}/>
        </ContainerFooterPosts>
      </ContainerPostProvider>
    </>
  );
}
