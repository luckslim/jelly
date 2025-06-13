import { Textarea } from "./style";
type Props = {
  PlaceHolder: string;
  name?:string;
  id?:string;
}
export function TextareaProvider({PlaceHolder}:Props) {
  return (
    <Textarea
      name=""
      id=""
      placeholder={PlaceHolder}
    ></Textarea>
  );
}
