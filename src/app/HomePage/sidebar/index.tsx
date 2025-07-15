"use client";
import { Button } from "@/app/components/button";
import { ContainerSideBarProfiler, DisplayCoins } from "./style";
import { Profiler } from "@/app/components/profiler";
import { BuyPulseCoins } from "@/app/components/buycoins";
import {CoinsIcon } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <>
      <ContainerSideBarProfiler>
        <Profiler
          urlImage="https://avatars.githubusercontent.com/u/95627552?v=4"
          name="Lucas Soares Lima"
          userName="@lucassl22"
        />
        <DisplayCoins>
          Moedas
          <p>1000 <CoinsIcon color="#e6ff58" size={22} weight="fill" /></p>
        </DisplayCoins>
        <Button title="Meus Posts" type="PRIMARY" />
        <Button title="Sair" type="SECONDARY" />
      </ContainerSideBarProfiler>
      <BuyPulseCoins/>
    </>
  );
}
