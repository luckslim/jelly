import { Actions } from "../actions";
import { ContainerTextArea, ContainerTextProvider } from "./style";

export function TextAreaComments() {
  return (
    <>
      <ContainerTextProvider>
        <ContainerTextArea />
        <Actions  title="Postar Comentário" />
      </ContainerTextProvider>
    </>
  );
}
