import { ImagesSquareIcon } from "@phosphor-icons/react";
import { Actions } from "../actions";
import { ContainerGeneral, Textarea } from "./style";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
type Props = {
  PlaceHolder: string;
};
const newPostFormSchema = z.object({
  post: z.string().min(1, "(Erro!)- O text deve ser maior que 0"),
});
type NewPostFormSchema = z.infer<typeof newPostFormSchema>;
export function TextareaProvider({ PlaceHolder }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<NewPostFormSchema>({
    resolver: zodResolver(newPostFormSchema),
  });
  function handlePost({ post }: NewPostFormSchema) {
    console.log(post);
    reset();
    return;
  }
  return (
    <>
      <ContainerGeneral onSubmit={handleSubmit(handlePost)}>
        <Textarea {...register('post')} placeholder={PlaceHolder}></Textarea>
        <Actions icons={[{ icon: ImagesSquareIcon }]} title="Postar" />
      </ContainerGeneral>
    </>
  );
}
