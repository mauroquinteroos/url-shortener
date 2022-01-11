import React, { useState, useEffect } from "react";
import ShortlyLogo from "../images/logo.svg";
import IconHamburger from "../images/icon-hamburger.svg";
import { Wrap } from "../components/Wrap";
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
  NavHamburgerButton,
  HamburgerImage,
  HeaderButton,
} from "../styles/HeaderStyles";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(!isOpen);
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  useEffect(() => {
    let timeOutId = null;
    const resizeListener = () => {
      clearTimeout(timeOutId);

      timeOutId = setTimeout(() => {
        let width = getWidth();
        if (width > 768) {
          setOpen(false);
        }
      }, 150);
    };
    window.addEventListener("resize", resizeListener);

    return () => window.addEventListener("resize", resizeListener);
  }, []);

  return (
    <HeaderWrapper>
      <Wrap>
        <NavWrapper>
          <LeftNavWrapper>
            <LogoLink href="/">
              <HeaderLogo src={ShortlyLogo} alt="shortly logo" />
            </LogoLink>
          </LeftNavWrapper>
          <NavHamburgerButton onClick={onOpen}>
            <HamburgerImage src={IconHamburger} alt="Icon Hamburger" />
          </NavHamburgerButton>
          <RightNavWrapper className={isOpen ? "active" : ""}>
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
              <HeaderButton>Sign Up</HeaderButton>
            </SignWrapper>
          </RightNavWrapper>
        </NavWrapper>
      </Wrap>
    </HeaderWrapper>
  );
};
