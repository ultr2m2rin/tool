import {
  QuestionOneOptionOne,
  QuestionOneOptionTwo,
  QuestionOneTitle,
} from "../common/question-list";
import Question from "../common/components/question";

export default function Setup() {
  return (
    <div>
      <Question
        title={QuestionOneTitle}
        optionOne={<QuestionOneOptionOne />}
        optionTwo={<QuestionOneOptionTwo />}
      />
    </div>
  );
}
