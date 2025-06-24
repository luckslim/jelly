import { XIcon } from "@phosphor-icons/react";
import { ButtonIncrement } from "../buttonincrement";
import { ContainerGeneral, IncrementimageInput } from "./style";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
type Props = {
    typeFile?: string;
    nameButton: string
}
const incrementImageSchema = z.object({
    imagePost: z.instanceof(FileList)                                     
})
type IncrementImageSchema = z.infer<typeof incrementImageSchema>
export function IncrementTagImage({ nameButton }: Props) {
    const { register, handleSubmit } = useForm<IncrementImageSchema>({
        resolver: zodResolver(incrementImageSchema)
    })
    function handleIncrementImage({ imagePost }: IncrementImageSchema) {
        console.log(imagePost)
    }
    return (
        <>
            <ContainerGeneral>
                <ButtonIncrement onclick={handleSubmit(handleIncrementImage)} nameButton={nameButton} />
                <IncrementimageInput {...register('imagePost')} accept="image/*" type="file" />
                <XIcon size={15} weight="thin" color="red" />
            </ContainerGeneral>
        </>
    )
}