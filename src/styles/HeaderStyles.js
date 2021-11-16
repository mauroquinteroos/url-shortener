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

export const RightNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 4.8rem;
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
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const SignWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
`;

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
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
  }
`;
