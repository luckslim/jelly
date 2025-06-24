import { GithubLogoIcon, ImagesSquareIcon } from "@phosphor-icons/react";
import { Actions } from "../actions";
import { ContainerGeneral, Textarea } from "./style";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IncrementTagImage } from "../incrementImage";
import { IncrementGithub } from "@/app/components/incrementGithub";
import { useState } from "react";
type Props = {
  PlaceHolder: string;
};
const newPostFormSchema = z.object({
  post: z.string().min(1, "(Erro!)- O text deve ser maior que 0"),
});
type NewPostFormSchema = z.infer<typeof newPostFormSchema>;
export function TextareaProvider({ PlaceHolder }: Props) {
  const [GithubInsertTag, setGithubInsertTag] = useState(false);
  const [ImageInsertTag, setImageInsertTag] = useState(false);

  const {
    register,
    handleSubmit,
    reset
  } = useForm<NewPostFormSchema>({
    resolver: zodResolver(newPostFormSchema),
  });
  function handlePost({ post }: NewPostFormSchema) {
    console.log(post);
    reset();
    return;
  }
  function handleGithubTag() {
    setGithubInsertTag((prev) => !prev);
  }
  function handleImageTag() {
    setImageInsertTag((prev) => !prev);
  }
  return (
    <>
      <ContainerGeneral onSubmit={handleSubmit(handlePost)}>
        <Textarea {...register("post")} placeholder={PlaceHolder}></Textarea>
        {ImageInsertTag && (
          <IncrementTagImage nameButton="Enviar Imagem" typeFile="imagem.png" />
        )}
        {GithubInsertTag && <IncrementGithub />}
        <Actions
          icons={[
            { icon: ImagesSquareIcon, onclick: handleImageTag },
            { icon: GithubLogoIcon, onclick: handleGithubTag },
          ]}
          title="Postar"
        />
      </ContainerGeneral>
    </>
  );
}
