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
import { Search } from "../components/chat/searchFriends";
import { ChatInRealTime } from "../components/chat";
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
          <ChatInRealTime/>
        </ContainerExplorer>
      </ContainerProvider>
    </>
  );
}
