import { useState } from "react";

import {
  QuestionOneOptionOne,
  QuestionOneOptionTwo,
  QuestionOneTitle,
  QuestionTwoTitle,
  QuestionTwoOptionOne,
  QuestionTwoOptionTwo,
  QuestionThreeOptionOne,
  QuestionThreeOptionThree,
  QuestionThreeOptionTwo,
  QuestionThreeTitle,
  QuestionFiveOptionOne,
  QuestionFiveOptionTwo,
  QuestionFiveTitle,
  QuestionFourOptionOne,
  QuestionFourOptionTwo,
  QuestionFourTitle,
  QuestionSevenOptionOne,
  QuestionSevenOptionThree,
  QuestionSevenOptionTwo,
  QuestionSevenTitle,
  QuestionSixOptionOne,
  QuestionSixOptionThree,
  QuestionSixOptionTwo,
  QuestionSixTitle,
  QuestionEightOptionThree,
  QuestionEightOptionTwo,
  QuestionEightTitle,
  QuestionNineOptionOne,
  QuestionNineOptionTwo,
  QuestionNineTitle,
} from "../common/setup-question-list";

import Question from "../common/components/question";

export default function Setup() {
  // TODO: investigate form frameworks if there's a better way to manage conditional rendering of questions
  const [questionOneValue, setQuestionOneValue] = useState<string>("");
  const [questionEightValue, setQuestionEightValue] = useState<string>("");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(8);

  const answerQuestionOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionOneValue(event.target.value);
    countScore(event);

    if (event.target.value == "no") setTotal(5);
  };

  const countScore = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "question-one": {
        if (value === "yes") setScore(score + 1);
        break;
      }
      case "question-two": {
        if (value === "no") setScore(score + 1);
        break;
      }
      case "question-three": {
        if (value === "no") setScore(score + 1);
        break;
      }
      case "question-four": {
        if (value === "yes") setScore(score + 1);
        break;
      }
      case "question-five": {
        if (value === "yes") setScore(score + 1);
        break;
      }
      case "question-six": {
        if (value === "yes") setScore(score + 1);
        break;
      }
      case "question-seven": {
        if (value === "no") setScore(score + 1);
        break;
      }
      case "question-nine": {
        if (value === "yes") setScore(score + 1);
        break;
      }
      default: {
        return 0;
      }
    }
  };

  return (
    <>
      <div>
        <Question
          title={QuestionOneTitle}
          name="question-one"
          optionOne={<QuestionOneOptionOne />}
          optionTwo={<QuestionOneOptionTwo />}
          onChange={answerQuestionOne}
        />
        {questionOneValue === "yes" && (
          <>
            <Question
              title={QuestionTwoTitle}
              name="question-two"
              optionOne={<QuestionTwoOptionOne />}
              optionTwo={<QuestionTwoOptionTwo />}
              onChange={countScore}
            />
            <Question
              title={QuestionThreeTitle}
              name="question-three"
              optionOne={<QuestionThreeOptionOne />}
              optionTwo={<QuestionThreeOptionTwo />}
              optionThree={<QuestionThreeOptionThree />}
              optionThreeText="Prefer not to answer"
              onChange={countScore}
            />
            <Question
              title={QuestionFourTitle}
              name="question-four"
              optionOne={<QuestionFourOptionOne />}
              optionTwo={<QuestionFourOptionTwo />}
              onChange={countScore}
            />
            <Question
              title={QuestionFiveTitle}
              name="question-five"
              optionOne={<QuestionFiveOptionOne />}
              optionTwo={<QuestionFiveOptionTwo />}
              onChange={countScore}
            />
            <Question
              title={QuestionSixTitle}
              name="question-six"
              optionOne={<QuestionSixOptionOne />}
              optionTwo={<QuestionSixOptionTwo />}
              optionThree={<QuestionSixOptionThree />}
              optionThreeText="I am not familiar with these"
              onChange={countScore}
            />
            <Question
              title={QuestionSevenTitle}
              name="question-seven"
              optionOne={<QuestionSevenOptionOne />}
              optionTwo={<QuestionSevenOptionTwo />}
              optionThree={<QuestionSevenOptionThree />}
              optionThreeText="Prefer not to answer"
              onChange={countScore}
            />
            <Question
              title={QuestionEightTitle}
              name="question-eight"
              optionTwo={<QuestionEightOptionTwo />}
              optionThree={<QuestionEightOptionThree />}
              optionThreeText="Not applicable"
              onChange={(event) => setQuestionEightValue(event.target.value)}
            />
          </>
        )}
        {questionOneValue === "no" && (
          <>
            <Question
              title={QuestionSixTitle}
              name="question-six"
              optionOne={<QuestionSixOptionOne />}
              optionTwo={<QuestionSixOptionTwo />}
              optionThree={<QuestionSixOptionThree />}
              optionThreeText="I am not familiar with these"
              onChange={countScore}
            />
            <Question
              title={QuestionSevenTitle}
              name="question-seven"
              optionOne={<QuestionSevenOptionOne />}
              optionTwo={<QuestionSevenOptionTwo />}
              optionThree={<QuestionSevenOptionThree />}
              optionThreeText="Prefer not to answer"
              onChange={countScore}
            />
            <Question
              title={QuestionEightTitle}
              name="question-eight"
              optionTwo={<QuestionEightOptionTwo />}
              optionThree={<QuestionEightOptionThree />}
              optionThreeText="Not applicable"
              onChange={(event) => setQuestionEightValue(event.target.value)}
            />
          </>
        )}
        {questionEightValue === "yes" && (
          <Question
            title={QuestionNineTitle}
            name="question-nine"
            optionOne={<QuestionNineOptionOne />}
            optionTwo={<QuestionNineOptionTwo />}
            onChange={countScore}
          />
        )}
      </div>
      score: {score} / {total}
    </>
  );
}
