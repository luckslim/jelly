import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContainerErrors,
  ContainerFormProvider,
  ContainerGeneral,
  ContainerInput,
} from "./style";
import { Button } from "../button";

const newdonateFormSchema = z.object({
  value: z.number().min(0.01, "(Erro!)- O valor deve ser maior que 0"),
});
type NewdonateFormSchema = z.infer<typeof newdonateFormSchema>;

const FormatMoney = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function Input() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewdonateFormSchema>({
    resolver: zodResolver(newdonateFormSchema),
    defaultValues: { value: 0 },
  });
  function handleNewDonate(data: NewdonateFormSchema) {
    console.log("você enviou!", FormatMoney.format(data.value));
  }
  return (
    <>
      <ContainerGeneral>
        <ContainerErrors>{errors.value?.message}</ContainerErrors>
        <ContainerFormProvider onSubmit={handleSubmit(handleNewDonate)}>
          <Controller
            name="value"
            control={control}
            render={({ field }) => {
              return (
                <ContainerInput
                  type="text"
                  inputMode="numeric"
                  placeholder="Informe o valor"
                  value={FormatMoney.format(field.value)}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, "");
                    const cents = parseInt(onlyNumbers || "0", 10);
                    field.onChange(cents / 100);
                  }}
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                      e.preventDefault();
                    }
                  }}
                />
              );
            }}
          />
          <Button type="PRIMARY" title="Donate" disabled={isSubmitting} />
        </ContainerFormProvider>
      </ContainerGeneral>
    </>
  );
}
