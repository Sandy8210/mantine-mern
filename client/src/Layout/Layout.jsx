import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Group,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import Header from "../component/Header";
import SideNav from "../component/SideNav";
import MainHeader from "../component/MainHeader";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding={"md"}
    >
      <AppShellHeader>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size={"sm"}
          />
          <Header />
        </Group>
      </AppShellHeader>

      <AppShellNavbar p={"md"}>
        <SideNav />
      </AppShellNavbar>
      <AppShellMain>
        <MainHeader />
        
      </AppShellMain>
    </AppShell>
  );
};

export default Layout;
