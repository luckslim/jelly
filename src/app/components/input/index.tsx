import { Button } from "../button";
import { ContainerFormProvider, ContainerInput } from "./style";

export function Input() {
  return (
    <>
    <ContainerFormProvider>
      <ContainerInput
        type="number"
        placeholder="Insira o Valor"
      ></ContainerInput>
      <Button title="Doar Pulse" type="SECONDARY" />
    </ContainerFormProvider>
    </>
  );
}
