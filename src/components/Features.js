import React from "react";
import {
  FeatureDescription,
  FeatureDescriptionWrap,
  FeatureSearcherWrap,
  FeaturesWrap,
  FeatureTitle,
} from "../styles/FeaturesStyles";
import Searcher from "./Searcher";
import Wrap from "./Wrap";

const Features = () => {
  return (
    <FeaturesWrap>
      <Wrap>
        <FeatureSearcherWrap>
          <Searcher />
        </FeatureSearcherWrap>
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
