import { ArrowLineRightIcon } from "@phosphor-icons/react";
import { Profiler } from "../../profiler";
import {
  ContainerChatMessage,
  ContainerChatProfiler,
  ContainerSendMessage,
  ContainerTextArea,
  StyleOffCanvas,
} from "./style";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { Actions } from "../../actions";
import { Message } from "./message";
export function ListChat() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <ContainerChatProfiler onClick={handleShow}>
        <Profiler
          name="Lucas Soares"
          urlImage="https://avatars.githubusercontent.com/u/95627552?v=4"
          message="ola tudo bem!"
        />
        <ArrowLineRightIcon size={22} weight="thin" />
      </ContainerChatProfiler>
      <StyleOffCanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Profiler
            name="Lucas Soares"
            urlImage="https://avatars.githubusercontent.com/u/95627552?v=4"
            userName="@Lucassoarelim22"
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ContainerChatMessage>
            <Message type={"ProfilerMe"} text="Mensagem do amigo" />
            <Message type={"ProfilerFriend"} text="minha mensagem!" />
            <Message
              type={"ProfilerFriend"}
              text="minha mensagem, outra vez!"
            />
          </ContainerChatMessage>
          <ContainerSendMessage>
            <ContainerTextArea />
            <Actions title="enviar" />
          </ContainerSendMessage>
        </Offcanvas.Body>
      </StyleOffCanvas>
    </>
  );
}
