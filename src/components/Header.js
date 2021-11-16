import React from "react";
import ShortlyLogo from "../images/logo.svg";
import { Wrap } from "../components/Wrap";
import { Button } from "../components/Button";
import {
  HeaderWrapper,
  NavWrapper,
  LeftNavWrapper,
  RightNavWrapper,
  LogoLink,
  HeaderLogo,
  MenuList,
  SignWrapper,
  MenuItem,
  MenuLink,
} from "../styles/HeaderStyles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Wrap>
        <NavWrapper>
          <LeftNavWrapper>
            <LogoLink href="/">
              <HeaderLogo src={ShortlyLogo} alt="shortly logo" />
            </LogoLink>
          </LeftNavWrapper>
          <RightNavWrapper>
            <MenuList>
              <MenuItem>
                <MenuLink className="active" href="#">
                  Features
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#">Pricing</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#">Resources</MenuLink>
              </MenuItem>
            </MenuList>
            <SignWrapper>
              <MenuLink href="#" marginRight="3.5">
                Login
              </MenuLink>
              <Button>Sign Up</Button>
            </SignWrapper>
          </RightNavWrapper>
        </NavWrapper>
      </Wrap>
    </HeaderWrapper>
  );
};
