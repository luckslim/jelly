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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function Feed() {

  return (
    <>
      <ContainerGeneral>
        <ContainerFeedProvider>
          <TextareaProvider PlaceHolder="Apresente seu Projeto, faça amigos e contribua com a comunidade..." />
        </ContainerFeedProvider>
        <ContainerPostsProvider>
          <Posts />
          <Posts />
        </ContainerPostsProvider>
      </ContainerGeneral>
    </>
  );
}
