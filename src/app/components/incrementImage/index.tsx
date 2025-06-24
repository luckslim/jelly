"use client"
import { XIcon } from "@phosphor-icons/react";
import { ButtonIncrement } from "../buttonincrement";
import { ContainerGeneral, IncrementimageInput } from "./style";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Image from "next/image";
type Props = {
    typeFile?: string;
    nameButton: string
}
const incrementImageSchema = z.object({
    imagePost: z.instanceof(FileList)
})
type IncrementImageSchema = z.infer<typeof incrementImageSchema>
export function IncrementTagImage({ nameButton }: Props) {
    const [preview, setPreview] = useState<String | null>(null)
    const { register, handleSubmit, watch } = useForm<IncrementImageSchema>({
        resolver: zodResolver(incrementImageSchema)
    })
    const imagePost = watch("imagePost")
    if (imagePost && imagePost.length > 0 && !preview) {
        const file = imagePost[0];
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
    }
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
            {preview && (
                <Image
                    src={`${preview}`}
                    alt="Preview"
                    width={100}
                    height={100}
                />
            )}
        </>
    )
}