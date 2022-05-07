import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { useGlobalState } from "../store/score-context";

import "./question.css";

interface QuestionProps {
  title: ReactNode;
  name: string;
  optionOne?: ReactNode;
  optionTwo: ReactNode;
  optionThree?: ReactNode;
  optionThreeText?: string;
  nextQuestionChange: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Question(props: QuestionProps) {
  const {
    title,
    name,
    optionOne,
    optionTwo,
    optionThree,
    optionThreeText,
    nextQuestionChange,
    onChange,
  } = props;

  const [answerValue, setAnswerValue] = useState<string | undefined>(undefined);
  const { state, setState } = useGlobalState();

  useEffect(() => {
    setAnswerValue(undefined);
  }, [nextQuestionChange]);

  const answer = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setAnswerValue(value);

    if (onChange !== undefined) onChange(event);

    const recc = state.questionReccommendations;

    // this doesn't do anything; just for type guarding
    if (recc === undefined) return;

    if (value === "yes") {
      setState((prevState) => ({
        ...prevState,
        questionReccommendations: [
          ...recc,
          { question: title, reccommendation: optionOne },
        ],
      }));
    } else if (value === "no") {
      setState((prevState) => ({
        ...prevState,
        questionReccommendations: [
          ...recc,
          { question: title, reccommendation: optionTwo },
        ],
      }));
    } else if (value === "indeterminate") {
      setState((prevState) => ({
        ...prevState,
        questionReccommendations: [
          ...recc,
          { question: title, reccommendation: optionThree },
        ],
      }));
    }
  };

  return (
    <div className="content">
      <h3 className="question-title">{title}</h3>
      <label>
        <input
          type="radio"
          checked={answerValue === "yes"}
          value="yes"
          name={name}
          onChange={answer}
          disabled={answerValue !== undefined && answerValue !== "yes"}
        />
        Yes
      </label>
      <br></br>
      <label>
        <input
          type="radio"
          checked={answerValue === "no"}
          value="no"
          name={name}
          onChange={answer}
          disabled={answerValue !== undefined && answerValue !== "no"}
        />
        No
      </label>
      <br></br>
      {optionThree !== undefined && (
        <label>
          <input
            type="radio"
            checked={answerValue === "indeterminate"}
            value="indeterminate"
            name={name}
            onChange={answer}
            disabled={
              answerValue !== undefined && answerValue !== "indeterminate"
            }
          />
          {optionThreeText}
        </label>
      )}
      {answerValue === "yes" && <div className="answer">{optionOne}</div>}
      {answerValue === "no" && <div className="answer">{optionTwo}</div>}
      {answerValue === "indeterminate" && (
        <div className="answer">{optionThree}</div>
      )}
    </div>
  );
}
