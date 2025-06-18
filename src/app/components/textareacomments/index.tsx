import { z } from "zod";
import { Actions } from "../actions";
import { ContainerTextArea, ContainerTextProvider } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const newCommentFormSchema = z.object({
  comment: z.string().min(1, "(Erro!)- O valor deve ser maior que 0"),
});
type NewCommentFormSchema = z.infer<typeof newCommentFormSchema>;
export function TextAreaComments() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<NewCommentFormSchema>({
    resolver: zodResolver(newCommentFormSchema)
  });
  function handleNewComment({comment}:NewCommentFormSchema){
    console.log(comment)
    reset()
    return comment;
  }
  return (
    <>
      <ContainerTextProvider onSubmit={handleSubmit(handleNewComment)}>
        <ContainerTextArea {...register('comment')}/>
        <Actions title="Postar Comentário" />
      </ContainerTextProvider>
    </>
  );
}
