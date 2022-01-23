import React from "react";
import WorkingHeroImage from "../images/working-hero.svg";
import Wrap from "../components/Wrap";
import {
  ContentWrap,
  HeroButton,
  HeroDescription,
  HeroImage,
  HeroImageWrap,
  HeroTitle,
  HeroWrap,
} from "../styles/HeroStyles";

const Hero = () => {
  return (
    <HeroWrap>
      <Wrap>
        <HeroImageWrap>
          <HeroImage src={WorkingHeroImage} alt="working hero image shortly" />
          <ContentWrap>
            <HeroTitle>More than just shorter links</HeroTitle>
            <HeroDescription>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </HeroDescription>
            <HeroButton>Get Started</HeroButton>
          </ContentWrap>
        </HeroImageWrap>
      </Wrap>
    </HeroWrap>
  );
};

export default Hero;
