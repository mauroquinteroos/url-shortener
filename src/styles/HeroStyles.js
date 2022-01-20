import styled from "styled-components";
import Button from "../components/Button";

export const HeroWrap = styled.div`
  position: relative;
  /* margin-top: 8rem; */
  margin-top: 12vh;
  /* border: 1px solid green; */
`;

export const HeroWrapper = styled.section`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr;
`;

export const ContentWrapper = styled.div`
  grid-column: 1;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  grid-column: 2;
`;

export const HeroTitle = styled.h1`
  max-width: 15ch;
  margin: 0;

  font-size: ${({ theme }) => theme.fontSizes.title.normal};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darker};
  line-height: 1.2;
`;

export const HeroDescription = styled.p`
  margin: 0;
  margin-top: 0.5em;
  max-width: 50ch;

  color: ${({ theme }) => theme.colors.light};
  line-height: 1.6;
`;

export const HeroButton = styled(Button)`
  margin-top: 2em;
  min-width: 16rem;
`;

export const HeroImage = styled.img`
  width: 80rem;
  position: absolute;
  top: -8rem;
  right: -6rem;
  /* margin-left: 30rem; */

  object-fit: contain;
`;
