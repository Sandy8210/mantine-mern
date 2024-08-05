import React from "react";
import { NavLink } from "@mantine/core";
import { sideNav } from "../utills/sideBarData";
import { IconUser, IconLogout } from "@tabler/icons-react";
import { SideNavContainer } from "../utills/Style";

const SideNav = () => {
  return (
    <SideNavContainer>
      <nav>
        {sideNav.map((item, index) => (
          <NavLink key={index} label={item.name} leftSection={item.icon} />
        ))}
      </nav>

      <div className="user-logout">
        <NavLink
          label="profile"
          leftSection={<IconUser size="1rem" stroke={1.5} />}
        />
        <NavLink
          label="log out"
          leftSection={<IconLogout size="1rem" stroke={1.5} />}
        />
      </div>
    </SideNavContainer>
  );
};

export default SideNav;
