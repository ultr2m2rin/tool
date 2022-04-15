import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Questions } from "../setup-question-list";
import Question from "./question";

interface QuizProps {
  questions: Questions[];
}

export default function Quiz(props: QuizProps) {
  const { questions } = props;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [nextQuestionChange, setNextQuestionChange] = useState(false);

  const question = questions[currentQuestionIndex];
  const title = question.question;
  const recommendationOne = question.recommendations[0];
  const recommendationTwo = question.recommendations[1];
  const recommendationThree = question.recommendations[2];
  const recommendationThreeButtonName =
    question.recommendationThreeButtonContent;

  const navigate = useNavigate();

  const nextQuestion = () => {
    if (nextQuestionIndex === 9) navigate("/summary");

    setNextQuestionChange(!nextQuestionChange);
    setCurrentQuestionIndex(nextQuestionIndex);

    if (nextQuestionIndex !== currentQuestionIndex)
      setQuestionNumber(questionNumber + 1);
  };

  const changeQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;

    if (currentQuestionIndex === 0 && answer === "yes") setNextQuestionIndex(1);
    else if (currentQuestionIndex === 0 && answer === "no")
      setNextQuestionIndex(5);
    else if (currentQuestionIndex === 7 && answer === "yes")
      setNextQuestionIndex(8);
    else if (
      (currentQuestionIndex === 7 && answer === "no") ||
      answer === "indeterminate"
    )
      setNextQuestionIndex(9);
    else setNextQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      {questions !== undefined && (
        <Question
          title={`${questionNumber}. ${title}`}
          optionOne={recommendationOne()}
          optionTwo={recommendationTwo()}
          optionThree={recommendationThree && recommendationThree()}
          optionThreeText={recommendationThreeButtonName}
          name={`question-${currentQuestionIndex}`}
          nextQuestionChange={nextQuestionChange}
          onChange={changeQuestion}
        />
      )}
      <button onClick={() => nextQuestion()}>next question</button>
    </div>
  );
}
