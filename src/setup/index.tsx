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
  const [questionOneValue, setQuestionOneValue] = useState<undefined | string>(
    undefined
  );

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
