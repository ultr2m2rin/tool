import { ChangeEvent, ReactNode, useState } from "react";

interface QuestionProps {
  title: ReactNode;
  optionOne: ReactNode;
  optionTwo: ReactNode;
  optionThree?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Question(props: QuestionProps) {
  const { title, optionOne, optionTwo, onChange } = props;

  const [answerValue, setAnswerValue] = useState<undefined | string>(undefined);

  const answer = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setAnswerValue(value);

    if (onChange !== undefined) onChange(event);
  };

  return (
    <div>
      <h3>{title}</h3>
      <label>
        <input type="radio" value="yes" name="answer" onChange={answer} /> Yes
      </label>
      <label>
        <input type="radio" value="no" name="answer" onChange={answer} /> No
      </label>
      {answerValue === "yes" && optionOne}
      {answerValue === "no" && optionTwo}
    </div>
  );
}
