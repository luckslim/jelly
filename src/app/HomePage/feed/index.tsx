"use client"
import { Actions } from "@/app/components/actions";
import { TextareaProvider } from "@/app/components/textarea";
import {
  ImagesSquareIcon,
} from "@phosphor-icons/react";
import {
  ContainerFeedProvider,
  ContainerGeneral,
  ContainerPostsProvider,
} from "./style";
import { Posts } from "@/app/components/posts";

export function Feed() {
  return (
    <>
      <ContainerGeneral>
        <ContainerFeedProvider>
          <TextareaProvider PlaceHolder="Poste aqui!" />
          <Actions
            title="Postar"
            icons={[{icon: ImagesSquareIcon}]}
          />
        </ContainerFeedProvider>
        <ContainerPostsProvider>
          <Posts />
          <Posts />
        </ContainerPostsProvider>
      </ContainerGeneral>
    </>
  );
}
