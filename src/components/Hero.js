import React from "react";
import WorkingHeroImage from "../images/working-hero.svg";
import Wrap from "../components/Wrap";
import {
  ContentWrapper,
  HeroButton,
  HeroDescription,
  HeroImage,
  HeroTitle,
  HeroWrap,
  HeroWrapper,
  ImageWrapper,
} from "../styles/HeroStyles";

const Hero = () => {
  return (
    <>
      <HeroWrap>
        <Wrap>
          <HeroWrapper>
            <ContentWrapper>
              <HeroTitle>More than just shorter links</HeroTitle>
              <HeroDescription>
                Build your brand's recognition and get detailed insights on how
                your links are performing
              </HeroDescription>
              <HeroButton>Get Started</HeroButton>
            </ContentWrapper>
            <ImageWrapper>
              <HeroImage
                src={WorkingHeroImage}
                alt="working hero image shortly"
              />
            </ImageWrapper>
          </HeroWrapper>
        </Wrap>
      </HeroWrap>
    </>
  );
};

export default Hero;
