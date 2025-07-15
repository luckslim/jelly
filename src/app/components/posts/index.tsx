import {
  ChatCenteredTextIcon,
  CurrencyCircleDollarIcon,
  DotsThreeOutlineVerticalIcon,
  HeartIcon,
} from "@phosphor-icons/react";
import { Profiler } from "../profiler";
import {
  ButtonFriendly,
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
  const [showButton, setShowButton] = useState(false)
  function handlelike() {
    console.log("curtido!");
  }
  function handleButtonFriendly(){
    setShowButton((prev)=>!prev)
  }
  function handleMoney() {
    setShowDonate((prev) => !prev);
    setShowComments(false)
    setShowCommentsAction(false)
  }
  function handleComments() {
    setShowComments((prev) => !prev);
    setShowCommentsAction(false)
    setShowDonate(false)
  }
  function handleCommentsAction() {
    setShowCommentsAction((prev) => !prev);
    setShowDonate(false)
    setShowComments(false)
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
          {showButton && <ButtonFriendly>Enviar Convite</ButtonFriendly>}
          {!showButton && <DotsThreeOutlineVerticalIcon onClick={handleButtonFriendly} size={22} />}
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
            onclick={handleCommentsAction}
            icons={[
              { icon: HeartIcon, text: "123", onclick: handlelike },
              {
                icon: CurrencyCircleDollarIcon,
                text: `${FormatMoney.format('100')}`,
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
        {showCommentsAction && (
          <ContainerResponsesComments>
            <TextAreaComments />
          </ContainerResponsesComments>
        )}
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
