import styled from "styled-components";
import { Container as MantineContainer } from "@mantine/core";

const StyledContainer = styled(MantineContainer)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  margin: 10px 0;
  color: red;
  text-transform: uppercase;
`;

const FormContainer = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  min-width: 400px;
  border-radius: 10px;
  border: none;
`;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

const UserContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SpanStyle = styled.span`
  color: orangered;
  cursor: pointer;
`;

const SideNavContainer = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 30px;
`;

export {
  FormContainer,
  FormTitle,
  StyledContainer,
  NavContainer,
  UserContainer,
  SpanStyle,
  SideNavContainer,
};
