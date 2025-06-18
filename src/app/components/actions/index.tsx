"use client";
import { IconProps } from "@phosphor-icons/react";
import { Button } from "../button";
import { ActionProvider, BoxActionIcons } from "./style";
type IconType = React.ComponentType<IconProps>;
type ActionItem = {
  icon?: IconType;
  text?: string;
  onclick?:()=>void;
};
type CardProps = {
  icons?: ActionItem[];
  title?: string;
  children?: React.ReactNode;
  onclick?:()=>void;
};
export function Actions({ icons, title, onclick}: CardProps) {
  return (
    <>
      <ActionProvider>
        <BoxActionIcons>
          {icons?.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} style={{ textAlign: "center" }}>
               {Icon && <Icon onClick={item.onclick} size={22}/>} 
               <span>{item.text}</span>
              </div>
            );
          })}
        </BoxActionIcons>
        {title && <Button  onclick={onclick} title={title} type="PRIMARY" />}
      </ActionProvider>
    </>
  );
}
