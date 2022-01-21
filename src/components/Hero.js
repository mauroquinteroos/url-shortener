import React from "react";
import WorkingHeroImage from "../images/working-hero.svg";
import Wrap from "../components/Wrap";
import {
  ContentWrapper,
  HeroButton,
  HeroDescription,
  HeroImage,
  HeroImageWrapper,
  HeroTitle,
  HeroWrap,
} from "../styles/HeroStyles";

const Hero = () => {
  return (
    <>
      <HeroWrap>
        <Wrap>
          <HeroImageWrapper>
            <HeroImage
              src={WorkingHeroImage}
              alt="working hero image shortly"
            />
            <ContentWrapper>
              <HeroTitle>More than just shorter links</HeroTitle>
              <HeroDescription>
                Build your brand's recognition and get detailed insights on how
                your links are performing
              </HeroDescription>
              <HeroButton>Get Started</HeroButton>
            </ContentWrapper>
          </HeroImageWrapper>
        </Wrap>
      </HeroWrap>
    </>
  );
};

export default Hero;
