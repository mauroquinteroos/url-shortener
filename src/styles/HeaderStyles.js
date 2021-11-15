import styled from "styled-components";

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

export const MenuList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  margin-left: 4.8rem;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0 1.6rem;
  list-style-type: none;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: ${({ marginLeft }) =>
    marginLeft ? `${marginLeft}rem` : "0rem"};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}rem` : "0rem"};
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.link.normal};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
  transition: all 0.3s ease 0s;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
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

export const RightNavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
