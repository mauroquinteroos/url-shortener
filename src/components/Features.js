import React from "react";
import {
  FeatureDescription,
  FeatureDescriptionWrap,
  FeaturesWrap,
  FeatureTitle,
} from "../styles/FeaturesStyles";
import Wrap from "./Wrap";

const Features = () => {
  return (
    <FeaturesWrap>
      <Wrap>
        <FeatureDescriptionWrap>
          <FeatureTitle>Advanced Statistics</FeatureTitle>
          <FeatureDescription>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </FeatureDescription>
        </FeatureDescriptionWrap>
      </Wrap>
    </FeaturesWrap>
  );
};

export default Features;
