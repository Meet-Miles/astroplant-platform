import PropTypes from "prop-types";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import ArrowIcon from "../../public/icons/arrow-down.svg";
import styles from "../../styles/markdown.module.css";
import Date from "../Date";
import Dropdown from "../Dropdown";
import Card from "./Card";

const Container = styled(Card)`
  && {
    height: unset;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 2rem;

  transition: height 0.3s ease;
`;

const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => (props.open ? props.theme.primary : props.theme.light)};

  &:hover {
    color: ${(props) => props.theme.primary};
    fill: ${(props) => props.theme.primary};
  }
`;

const AnswerRow = styled.div`
  display: flex;

  height: ${(props) => (props.open ? "auto" : "0")};

  flex-direction: column;

  margin-top: ${(props) => (props.open ? "1rem" : "0")};

  overflow: hidden;

  transition: margin-top 0.1s linear;
`;

const DateRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 1rem;
`;

export default function FAQCard(props) {
  const [open, setOpen] = useState(false);
  const faq = props.faq;
  return (
    <Container>
      <QuestionRow open={open}>
        <ReactMarkdown source={faq.question} />
        <Dropdown
          onClick={() => setOpen(!open)}
          reverse={open}
          color={open ? "primary" : "light"}
          icon={<ArrowIcon />}
        />
      </QuestionRow>
      <AnswerRow open={open}>
        <ReactMarkdown source={faq.answer} className={styles.md} />
        <DateRow>
          <Date dateString={faq.updated_at} />
        </DateRow>
      </AnswerRow>
    </Container>
  );
}

FAQCard.propTypes = {
  /**
   * Object containing the FAQ information
   */
  faq: PropTypes.object.isRequired,
};
