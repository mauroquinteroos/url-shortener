import styled from "styled-components";
import Button from "../components/Button";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";

export const SearcherWrap = styled.section`
  padding: 3rem 5rem;

  background-color: ${({ theme }) => theme.colors.primary2};
  background-image: url(${bgShortenDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1.2rem;
`;

export const SearcherForm = styled.form`
  display: grid;
  grid-template-columns: 1.5fr 15rem;
  column-gap: 3rem;

  background-color: transparent;
`;

export const SearcherInput = styled.input`
  display: block;
  grid-column: 1 / span 1;

  min-width: 80%;
  padding: 2rem;

  border-radius: 1.2rem;
  border: none;

  font-size: ${({ theme }) => theme.fontSizes.text.normal};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.light};

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${({ theme }) => theme.colors.light};
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${({ theme }) => theme.colors.light};
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: ${({ theme }) => theme.colors.light};
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const SearcherButton = styled(Button)`
  grid-column: 2 / span 1;

  border-radius: 1.2rem;

  &:hover {
    opacity: 1;
  }
`;
