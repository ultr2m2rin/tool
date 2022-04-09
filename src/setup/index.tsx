import { useState } from "react";

import {
  QuestionOneOptionOne,
  QuestionOneOptionTwo,
  QuestionOneTitle,
  QuestionTwoTitle,
  QuestionTwoOptionOne,
  QuestionTwoOptionTwo,
} from "../common/question-list";

import Question from "../common/components/question";

export default function Setup() {
  // TODO: investigate form frameworks if there's a better way to manage conditional rendering of questions
  const [questionOneValue, setQuestionOneValue] = useState<string>("");

  return (
    <div>
      <Question
        title={QuestionOneTitle}
        optionOne={<QuestionOneOptionOne />}
        optionTwo={<QuestionOneOptionTwo />}
        onChange={(event) => setQuestionOneValue(event.target.value)}
      />

      {questionOneValue === "yes" && (
        <Question
          title={QuestionTwoTitle}
          optionOne={<QuestionTwoOptionOne />}
          optionTwo={<QuestionTwoOptionTwo />}
        />
      )}
    </div>
  );
}
