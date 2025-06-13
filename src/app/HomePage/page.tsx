"use client";
import {
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import {
  ContainerExplorer,
  ContainerFeed,
  ContainerProvider,
  ContainerSideBar,
} from "./style";
import { Sidebar } from "./sidebar";
import { Feed } from "./feed";
export default function HomePage() {
  return (
    <>
      <ContainerProvider>
        <ContainerSideBar>
          <Sidebar/>
        </ContainerSideBar>
        <ContainerFeed>
          <Feed/>
        </ContainerFeed>
        <ContainerExplorer>
          <span>
            <MagnifyingGlassIcon size={22} />
            Tags em alta
          </span>
          <button>#bosonaro na cadeia!</button>
          <button>#Neymar eu te amo!</button>
          <button>#Lula ladrao roubou meu coração!</button>
        </ContainerExplorer>
      </ContainerProvider>
    </>
  );
}
