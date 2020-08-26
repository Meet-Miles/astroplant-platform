import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Breaks from "../utils/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  align-items: center;
  justify-content: flex-start;

  margin: ${(props) => (props.vertical ? "2rem 0" : "0")};
`;

const Separator = styled.div`
  display: ${(props) => (props.vertical ? "none" : "block")};
  height: 2rem;
  width: 1px;
  background-color: ${(props) => props.theme.grey};
  margin: 0 1rem;

  @media screen and (max-width: ${Breaks.medium}) {
    display: none;
  }
`;

const BrandName = styled.h3`
  color: white;
  margin-top: ${(props) => (props.vertical ? "1rem" : "0")};

  @media screen and (max-width: ${Breaks.medium}) {
    display: none;
  }
`;

export default function Brand(props) {
  return (
    <Container className={props.className} vertical={props.vertical}>
      <Logo size={props.vertical ? 40 : 32} />
      <Separator vertical={props.vertical} />
      <BrandName vertical={props.vertical}>astroplant</BrandName>
    </Container>
  );
}

Brand.propTypes = {
  /**
   * Styling class of the container. Used by styled-components.
   */
  className: PropTypes.string,
  /**
   * Whether or not to display the logo & separator vertically
   */
  vertical: PropTypes.bool,
};

Brand.defaultProps = {
  vertical: false,
};
