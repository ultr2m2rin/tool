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

  return (
    <div>
      <Question
        title={QuestionOneTitle}
        name="question-one"
        optionOne={<QuestionOneOptionOne />}
        optionTwo={<QuestionOneOptionTwo />}
        onChange={(event) => setQuestionOneValue(event.target.value)}
      />

      {questionOneValue === "yes" && (
        <>
          <Question
            title={QuestionTwoTitle}
            name="question-two"
            optionOne={<QuestionTwoOptionOne />}
            optionTwo={<QuestionTwoOptionTwo />}
          />
          <Question
            title={QuestionThreeTitle}
            name="question-three"
            optionOne={<QuestionThreeOptionOne />}
            optionTwo={<QuestionThreeOptionTwo />}
            optionThree={<QuestionThreeOptionThree />}
            optionThreeText="Prefer not to answer"
          />
          <Question
            title={QuestionFourTitle}
            name="question-four"
            optionOne={<QuestionFourOptionOne />}
            optionTwo={<QuestionFourOptionTwo />}
          />
          <Question
            title={QuestionFiveTitle}
            name="question-five"
            optionOne={<QuestionFiveOptionOne />}
            optionTwo={<QuestionFiveOptionTwo />}
          />
          <Question
            title={QuestionSixTitle}
            name="question-six"
            optionOne={<QuestionSixOptionOne />}
            optionTwo={<QuestionSixOptionTwo />}
            optionThree={<QuestionSixOptionThree />}
            optionThreeText="I am not familiar with these"
          />
          <Question
            title={QuestionSevenTitle}
            name="question-seven"
            optionOne={<QuestionSevenOptionOne />}
            optionTwo={<QuestionSevenOptionTwo />}
            optionThree={<QuestionSevenOptionThree />}
            optionThreeText="Prefer not to answer"
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
          />
          <Question
            title={QuestionSevenTitle}
            name="question-seven"
            optionOne={<QuestionSevenOptionOne />}
            optionTwo={<QuestionSevenOptionTwo />}
            optionThree={<QuestionSevenOptionThree />}
            optionThreeText="Prefer not to answer"
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
        />
      )}
    </div>
  );
}
