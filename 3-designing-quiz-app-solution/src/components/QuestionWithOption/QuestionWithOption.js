import React from "react";
import {
  QuestionContainer,
  Question,
  Option,
} from "./QuestionWithOption.styled";

const QuestionWithOption = ({ question, options }) => {
  return (
    <QuestionContainer>
      <Question>{question}</Question>
      {options.map((option) => (
        <Option>{option.text}</Option>
      ))}
    </QuestionContainer>
  );
};

export default QuestionWithOption;
