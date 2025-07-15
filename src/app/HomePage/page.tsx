"use client";
import {
  ContainerExplorer,
  ContainerFeed,
  ContainerProvider,
  ContainerSideBar,
} from "./style";
import { Sidebar } from "./sidebar";
import { Feed } from "./feed";
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
