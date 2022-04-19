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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(19);
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
    if (nextQuestionIndex === 28) navigate("/summarythree");

    setNextQuestionChange(!nextQuestionChange);
    setCurrentQuestionIndex(nextQuestionIndex);

    if (nextQuestionIndex !== currentQuestionIndex)
      setQuestionNumber(questionNumber + 1);
  };

  const changeQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;

    if (currentQuestionIndex === 22 && answer === "yes")
      setNextQuestionIndex(23);
    else if (
      (currentQuestionIndex === 22 && answer === "no") ||
      (currentQuestionIndex === 22 && answer === "indeterminate")
    )
      setNextQuestionIndex(24);
    else setNextQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      <h2>General Security</h2>
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
