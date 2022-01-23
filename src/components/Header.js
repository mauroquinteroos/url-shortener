import React, { useState, useEffect } from "react";
import ShortlyLogo from "../images/logo.svg";
import IconHamburger from "../images/icon-hamburger.svg";
import Wrap from "../components/Wrap";
import {
  HeaderWrap,
  NavWrap,
  LeftNavWrap,
  RightNavWrap,
  LogoLink,
  HeaderLogo,
  MenuList,
  SignWrap,
  MenuItem,
  MenuLink,
  NavHamburgerButton,
  HamburgerImage,
  HeaderButton,
} from "../styles/HeaderStyles";

const Header = () => {
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
    <HeaderWrap>
      <Wrap>
        <NavWrap>
          <LeftNavWrap>
            <LogoLink href="/">
              <HeaderLogo src={ShortlyLogo} alt="shortly logo" />
            </LogoLink>
          </LeftNavWrap>
          <NavHamburgerButton onClick={onOpen}>
            <HamburgerImage src={IconHamburger} alt="Icon Hamburger" />
          </NavHamburgerButton>
          <RightNavWrap className={isOpen ? "active" : ""}>
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
            <SignWrap>
              <MenuLink href="#" marginRight="3.5">
                Login
              </MenuLink>
              <HeaderButton>Sign Up</HeaderButton>
            </SignWrap>
          </RightNavWrap>
        </NavWrap>
      </Wrap>
    </HeaderWrap>
  );
};

export default Header;
