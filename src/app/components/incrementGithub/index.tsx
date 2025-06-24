import { z } from "zod";
import { ButtonIncrement } from "../buttonincrement";

import { ContainerGeneral, ContainerInput } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { TagGithub } from "../tags/github";
const newGithubTagSchema = z.object({
  tagGithub: z.string().min(1, "no minimo 1 caracter"),
});
type NewGithubTagSchema = z.infer<typeof newGithubTagSchema>;
export function IncrementGithub() {
  const [showTagGithub, setShowTagGithub] = useState(false);
  const { register, handleSubmit, reset } = useForm<NewGithubTagSchema>({
    resolver: zodResolver(newGithubTagSchema),
  });
  function handleGithubTag({ tagGithub }: NewGithubTagSchema) {
    setShowTagGithub((prev) => !prev);
    console.log(tagGithub)
    return tagGithub;
  }
  function deleteGithubTag() {
    reset();
    setShowTagGithub((prev) => !prev);
  }
  return (
    <>
      {showTagGithub ? (
        <TagGithub tagName="Repositório Alocado" onclick={deleteGithubTag} />
      ) : (
        <ContainerGeneral onClick={handleSubmit(handleGithubTag)}>
          <ButtonIncrement nameButton="Confirmar Github" />
          <ContainerInput {...register("tagGithub")} />
        </ContainerGeneral>
      )}
    </>
  );
}
