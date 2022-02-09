import React from "react";
import {
  SearcherButton,
  SearcherForm,
  SearcherInput,
  SearcherWrap,
} from "../styles/SearcherStyles";

const Searcher = () => {
  return (
    <SearcherWrap>
      <SearcherForm>
        <SearcherInput placeholder="Shorten a link here" />
        <SearcherButton>Shorten It!</SearcherButton>
      </SearcherForm>
    </SearcherWrap>
  );
};

export default Searcher;
