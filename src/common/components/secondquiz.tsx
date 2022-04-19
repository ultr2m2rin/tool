import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Questions } from "../setup-question-list";
import Question from "./question";

interface QuizProps {
  questions: Questions[];
}

export default function Quiz(props: QuizProps) {
  const { questions } = props;
  const [questionNumber, setQuestionNumber] = useState(10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(9);
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
    if (nextQuestionIndex === 19) navigate("/summarytwo");

    setNextQuestionChange(!nextQuestionChange);
    setCurrentQuestionIndex(nextQuestionIndex);

    if (nextQuestionIndex !== currentQuestionIndex)
      setQuestionNumber(questionNumber + 1);
  };

  const changeQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;

    if (currentQuestionIndex === 9 && answer === "yes")
      setNextQuestionIndex(10);
    else if (
      (currentQuestionIndex === 9 && answer === "no") ||
      (currentQuestionIndex === 9 && answer === "indeterminate")
    )
      setNextQuestionIndex(11);
    else if (currentQuestionIndex === 11 && answer === "yes")
      setNextQuestionIndex(12);
    else if (
      (currentQuestionIndex === 11 && answer === "no") ||
      (currentQuestionIndex === 11 && answer === "indeterminate")
    )
      setNextQuestionIndex(15);
    else if (currentQuestionIndex === 13 && answer === "yes")
      setNextQuestionIndex(14);
    else if (
      (currentQuestionIndex === 13 && answer === "no") ||
      (currentQuestionIndex === 13 && answer === "indeterminate")
    )
      setNextQuestionIndex(15);
    else if (currentQuestionIndex === 16 && answer === "yes")
      setNextQuestionIndex(17);
    else if (
      (currentQuestionIndex === 16 && answer === "no") ||
      (currentQuestionIndex === 16 && answer === "indeterminate")
    )
      setNextQuestionIndex(19);
    else if (currentQuestionIndex === 17 && answer === "yes")
      setNextQuestionIndex(18);
    else if (currentQuestionIndex === 17 && answer === "no")
      setNextQuestionIndex(19);
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
      <button onClick={() => nextQuestion()}>Next</button>
    </div>
  );
}
