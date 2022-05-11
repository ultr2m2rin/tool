import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Questions, Weight } from "../setup-question-list";
import { useGlobalState } from "../store/score-context";
import Question from "./question";

import "./quiz.css";

interface QuizProps {
  questions: Questions[];
}

export default function SecondQuiz(props: QuizProps) {
  const { questions } = props;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(9);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [nextQuestionChange, setNextQuestionChange] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const { setState } = useGlobalState();

  const question = questions[currentQuestionIndex];
  const title = question.question;
  const recommendationOne = question.recommendations[0];
  const recommendationTwo = question.recommendations[1];
  const recommendationThree = question.recommendations[2];
  const recommendationThreeButtonName =
    question.recommendationThreeButtonContent;
  const weight = question.weight;
  const [numQuestionsWithoutWeight, setNumQuestionsWithoutWeight] = useState(0);

  const navigate = useNavigate();

  // preventing refresh
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e: any) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    if (weight === undefined) {
      setNumQuestionsWithoutWeight((prev) => prev + 1);
    }
  }, [weight, questionNumber]);

  const nextQuestion = () => {
    if (weight !== undefined) {
      calculateWeight(currentAnswer, weight);
    }

    if (nextQuestionIndex === 19) {
      setState((prevState) => ({
        ...prevState,
        totalQuestions: questionNumber - numQuestionsWithoutWeight,
      }));
      navigate("/summarytwo");
    }

    setNextQuestionChange(!nextQuestionChange);
    setCurrentQuestionIndex(nextQuestionIndex);

    if (nextQuestionIndex !== currentQuestionIndex)
      setQuestionNumber(questionNumber + 1);
  };

  const changeQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;
    setCurrentAnswer(answer);

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

  const calculateWeight = (answer: string, weight: Weight) => {
    const answerTyped = answer as keyof typeof weight;
    const answerWeight = weight[answerTyped];

    // this doesn't do anything; it's for type guarding
    if (answerWeight === undefined) return;

    setState((prevState) => ({
      ...prevState,
      score: answerWeight + prevState.score,
    }));
  };

  return (
    <div>
      <h2 className="quiz-title">Notifications and Personal Data</h2>
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
      <div className="quiz-button-container">
        <button className="button" onClick={() => nextQuestion()}>
          NEXT
        </button>
      </div>
    </div>
  );
}
