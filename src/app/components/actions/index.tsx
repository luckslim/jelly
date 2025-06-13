"use client"
import { IconProps } from "@phosphor-icons/react";
import { Button } from "../button";
import { ActionProvider, BoxActionIcons } from "./style";
type IconType = React.ComponentType<IconProps>;
type CardProps = {
  icons?: IconType[];
  title: String;
  children?: React.ReactNode;
};
export function Actions({ icons, title }: CardProps) {
  return (
    <>
      <ActionProvider>
        <BoxActionIcons>
          {icons?.map((Icon, index) => (
            <Icon key={index} size={22}/>
          ))}
        </BoxActionIcons>
        <Button title={title} type="PRIMARY"/>
      </ActionProvider>
    </>
  );
}
