import styled from "styled-components";
import { Button } from "../components/Button";

export const HeaderWrapper = styled.header`
  padding-top: 5.2rem;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftNavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RightNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 100%;

  margin-left: 4.8rem;

  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.white};

  transition: top 0.3s ease-in-out 0s;

  &.active {
    top: 14%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    position: absolute;
    width: calc(100% - 3.2rem);
    left: 1.6rem;
    top: -100%;

    padding: 2rem 0;
    margin-left: 0;

    border-radius: 1.2rem;
    background-color: ${({ theme }) => theme.colors.primary2};
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;

  width: 13rem;

  text-decoration: none;
`;

export const HeaderLogo = styled.img`
  width: 100%;

  object-fit: contain;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    width: 90%;
  }
`;

export const SignWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border-top: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    width: 90%;

    border-top: 0.1rem solid ${({ theme }) => theme.colors.light};
  }
`;

export const MenuItem = styled.li`
  margin: 0 1.6rem;

  list-style-type: none;

  &:first-child {
    margin: 0;
  }
  &:last-child {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuLink = styled.a`
  display: block;

  width: 100%;

  margin-left: ${({ marginLeft }) =>
    marginLeft ? `${marginLeft}rem` : "0rem"};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}rem` : "0rem"};
  padding: 1rem;

  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.link.normal};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
  text-align: center;

  transition: all 0.3s ease 0s;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.dark};

    @media screen and (max-width: 768px) {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 0;
  }
`;

export const HeaderButton = styled(Button)`
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

// Responsive Design
export const NavHamburgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  padding: 0.6rem;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const HamburgerImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;
