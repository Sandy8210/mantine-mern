import React from "react";
import { IconUser } from "@tabler/icons-react";
import { NavContainer, SpanStyle, UserContainer } from "../utills/Style";

const Header = () => {
  return (
    <NavContainer>
      <div className="logo">
        <h2>
          Santhosh <SpanStyle>Sandy</SpanStyle>
        </h2>
      </div>
      <UserContainer>
        <IconUser />
        <SpanStyle>Sandy</SpanStyle>
      </UserContainer>
    </NavContainer>
  );
};

export default Header;
