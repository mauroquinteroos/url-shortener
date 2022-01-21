import styled from "styled-components";
import Button from "../components/Button";

export const HeroWrap = styled.div`
  position: relative;

  padding: 10rem 0;
  overflow: hidden;
`;

export const HeroImageWrapper = styled.div`
  display: relative;
`;

export const ContentWrapper = styled.div`
  text-align: left;
`;

export const HeroTitle = styled.h1`
  max-width: 15ch;

  margin: 0;

  font-size: ${({ theme }) => theme.fontSizes.title.normal};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darker};
  line-height: 1.2;

  @media screen and (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSizes.title.medium};
  }
  @media screen and (max-width: 1080px) {
    font-size: ${({ theme }) => theme.fontSizes.title.small};
  }
`;

export const HeroDescription = styled.p`
  max-width: 50ch;

  margin: 0;
  margin-top: 0.5em;

  color: ${({ theme }) => theme.colors.light};
  line-height: 1.6;

  @media screen and (max-width: 1000px) {
    max-width: 40ch;
  }
`;

export const HeroButton = styled(Button)`
  min-width: 16rem;

  margin-top: 2em;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 2rem;
  right: -10rem;
  width: 40vw;

  object-fit: contain;

  @media screen and (max-width: 1500px) {
    width: 42vw;
  }
  @media screen and (max-width: 1300px) {
    width: 45vw;
  }
  @media screen and (max-width: 1200px) {
    width: 48vw;
    top: 3rem;
  }
  @media screen and (max-width: 1100px) {
    width: 50vw;
  }
  @media screen and (max-width: 1080px) {
    width: 52vw;
  }
  @media screen and (max-width: 1000px) {
    width: 56vw;
    top: 4rem;
  }
  @media screen and (max-width: 800px) {
    width: 59vw;
  }
`;
