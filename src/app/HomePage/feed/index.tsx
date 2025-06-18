"use client"
import { TextareaProvider } from "@/app/components/textarea";
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
          <TextareaProvider PlaceHolder="Apresente seu Projeto..." />
        </ContainerFeedProvider>
        <ContainerPostsProvider>
          <Posts />
          <Posts />
        </ContainerPostsProvider>
      </ContainerGeneral>
    </>
  );
}
