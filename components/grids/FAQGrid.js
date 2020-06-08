import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.gridGap};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);

  padding: 2rem 0;

  height: 100%;
`;

export default function FAQGrid({ children }) {
  return <GridContainer>{children}</GridContainer>;
}

FAQGrid.propTypes = {
  children: PropTypes.node,
};