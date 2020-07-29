import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import SlackIcon from "../../public/icons/slack.svg";
import HelpCard from "../cards/HelpCard";
import HelpSectionCard from "../cards/HelpSectionCard";
import Grid from "./Grid";

const GridContainer = styled(Grid)`
  && {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export default function HelpGrid(props) {
  return (
    <GridContainer fillHeight className={props.className}>
      {props.helpSections.map((category) => (
        <HelpSectionCard helpSection={category} key={category.id} />
      ))}
      <HelpCard
        iconSVG={<SlackIcon />}
        iconSize={96}
        title={"Ask the community!"}
        href={"http://www.astroplant.slack.com/#/"}
      />
    </GridContainer>
  );
}

HelpGrid.propTypes = {
  /* attribute to edit the component style using styled-component */
  className: PropTypes.string,
  /* Node children of the component */
  children: PropTypes.node,
  /* arroy of helpSections objects */
  helpSections: PropTypes.arrayOf(PropTypes.object).isRequired,
};
