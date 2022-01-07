import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;

  min-width: 10rem;

  padding: 1rem 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 2rem;
  box-shadow: rgb(0 0 0 / 20%) 0rem 0.3rem 0.1rem -0.2rem,
    rgb(0 0 0 / 14%) 0rem 0.2rem 0.2rem 0rem,
    rgb(0 0 0 / 12%) 0rem 0.1rem 0.5rem 0rem;

  font-size: ${({ theme }) => theme.fontSizes.link.normal};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-decoration: none;
  line-height: 1.75;

  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    opacity: 0.6;
  }
`;
