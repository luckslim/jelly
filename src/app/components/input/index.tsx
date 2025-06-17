import * as z from "zod";
import { Button } from "../button";
import { ContainerFormProvider, ContainerInput } from "./style";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newdonateFormSchema = z.object({ 
  value: z.number().min(0, "Valor deve ser maior que 0"),
});

// Typagem
type NewdonateFormSchema = z.infer<typeof newdonateFormSchema>;

// Formatador opcional pra exibir como moeda
function formatCurrencyBR(valor: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
    .format(valor);
}

export function Input() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewdonateFormSchema>({
    resolver: zodResolver(newdonateFormSchema),
    defaultValues: {
      value: 0,
    },
  });

  const onSubmit: SubmitHandler<NewdonateFormSchema> = (data) => {
    console.log("Valor submitado!", data);
  };

  return (
    <ContainerFormProvider onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="value"
        control={control}
        render={({ field }) => (
          <ContainerInput
            type="number"
            step="1.0"
            min="0"
            onChange={(e) => field.onChange(Number(e.target.value))}
            value={field.value/100}
            placeholder="Informe o Valor"
          />
        )}

      />

      <button disabled={isSubmitting} type="submit">
        Enviar
      </button>

      {/* Apenas pra exibir o valor formatado junto */}
      {/* {isSubmitting ? '' : <p>Valor formatado: {formatCurrencyBR(watch("value"))}</p>}*/}
    </ContainerFormProvider>
  );
}
