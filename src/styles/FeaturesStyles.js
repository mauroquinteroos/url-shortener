import styled from "styled-components";

export const FeaturesWrap = styled.section`
  position: relative;

  background-color: ${({ theme }) => theme.colors.gray};
`;

export const FeatureSearcherWrap = styled.div`
  margin-top: -7.5rem;
  margin-bottom: 9rem;
`;

export const FeatureDescriptionWrap = styled.div``;

export const FeatureTitle = styled.h2`
  margin: 0 auto;

  font-size: ${({ theme }) => theme.fontSizes.subtitle.normal};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darker};
  text-align: center;
  line-height: 1.2;
`;

export const FeatureDescription = styled.p`
  max-width: 50ch;

  margin: 0 auto;
  margin-top: 1em;

  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  line-height: 1.6;
`;
