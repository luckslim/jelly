import {
  ChatCenteredTextIcon,
  CurrencyCircleDollarIcon,
  DotsThreeOutlineVerticalIcon,
  HeartIcon,
} from "@phosphor-icons/react";
import { Profiler } from "../profiler";
import {
  ContainerBodyPosts,
  ContainerFooterPosts,
  ContainerHeaderPosts,
  ContainerPostProvider,
  ContainerResponseDonate,
  ContainerResponses,
  ContainerResponsesComments,
} from "./style";
import { Actions } from "../actions";
import { Response } from "./response";
import { FormatMoney } from "@/app/utils/FormatMoney";
import { useState } from "react";
import { Input } from "../input";
import { ContainerResponse } from "./response/style";
import { Button } from "../button";
import { TextAreaComments } from "../textareacomments";

export function Posts() {
  const [showComments, setShowComments] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [showCommentsAction, setShowCommentsAction] = useState(false);

  function handlelike() {
    console.log("curtido!");
  }
  function handleMoney() {
    setShowDonate((prev) => !prev);
  }
  function handleComments() {
    setShowComments((prev) => !prev);
    console.log("comments");
  }
  function handleCommentsAction(){
    setShowCommentsAction((prev)=>!prev)
  }
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
          <img
            src="https://repinte.com.br/wp-content/uploads/2019/02/269135-conheca-os-x-predios-mais-bonitos-do-mundo.jpg"
            alt=""
          />
        </ContainerBodyPosts>
        <ContainerFooterPosts>
          <Actions
            title="Comentar"
            icons={[
              { icon: HeartIcon, text: "123", onclick: handlelike },
              {
                icon: CurrencyCircleDollarIcon,
                text: `${FormatMoney}`,
                onclick: handleMoney,
              },
              {
                icon: ChatCenteredTextIcon,
                text: "50",
                onclick: handleComments,
              },
            ]}
          />
        </ContainerFooterPosts>
        <ContainerResponsesComments>
          <TextAreaComments />
        </ContainerResponsesComments>
        {showDonate && (
          <ContainerResponseDonate>
            <Input />
          </ContainerResponseDonate>
        )}
        {showComments && (
          <ContainerResponses>
            <Response
              name="Pedro Pascal"
              userName="@pedropascal"
              urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDnIaSKvY5d0CIBuMqkX6rDIaO_9GCUGJSQ&s"
              textProfile="Muito Bom!!"
            />
          </ContainerResponses>
        )}
      </ContainerPostProvider>
    </>
  );
}
