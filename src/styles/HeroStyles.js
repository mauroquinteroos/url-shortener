import styled from "styled-components";
import Button from "../components/Button";

export const HeroWrap = styled.div`
  position: relative;

  padding-top: 10rem;
  padding-bottom: 10rem;

  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

export const HeroImageWrap = styled.div``;

export const ContentWrap = styled.div`
  margin-top: 0;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const HeroTitle = styled.h1`
  max-width: 15ch;

  margin: 0;

  font-size: ${({ theme }) => theme.fontSizes.title.normal};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darker};
  text-align: left;
  line-height: 1.2;

  @media screen and (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSizes.title.medium};
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;

    font-size: ${({ theme }) => theme.fontSizes.title.small};
    text-align: center;
  }
`;

export const HeroDescription = styled.p`
  max-width: 50ch;

  margin: 0;
  margin-top: 0.5em;

  color: ${({ theme }) => theme.colors.light};
  text-align: left;
  line-height: 1.6;

  @media screen and (max-width: 1000px) {
    max-width: 42ch;
  }

  @media screen and (max-width: 768px) {
    max-width: 45ch;

    margin: 1em auto 0;

    text-align: center;
  }
`;

export const HeroButton = styled(Button)`
  display: block;

  min-width: 16rem;

  margin-top: 2em;

  @media screen and (max-width: 768px) {
    margin: 3em auto 0;
  }
`;

export const HeroImage = styled.img`
  display: block;

  position: absolute;
  top: 2rem;
  z-index: 1;
  right: -10rem;
  width: 55rem;

  object-fit: contain;

  @media screen and (max-width: 900px) {
    top: 5rem;
    width: 46rem;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;

    margin: 0 auto;
  }
`;
