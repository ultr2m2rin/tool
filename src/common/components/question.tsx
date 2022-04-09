import { ChangeEvent, ReactNode, useState } from "react";

interface QuestionProps {
  title: ReactNode;
  name: string;
  optionOne?: ReactNode;
  optionTwo: ReactNode;
  optionThree?: ReactNode;
  optionThreeText?: string;
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
    onChange,
  } = props;

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
        <input type="radio" value="yes" name={name} onChange={answer} /> Yes
      </label>
      <label>
        <input type="radio" value="no" name={name} onChange={answer} /> No
      </label>
      {optionThree !== undefined && (
        <label>
          <input
            type="radio"
            value="indeterminate"
            name={name}
            onChange={answer}
          />
          {optionThreeText}
        </label>
      )}
      {answerValue === "yes" && optionOne}
      {answerValue === "no" && optionTwo}
      {answerValue === "indeterminate" && optionThree}
    </div>
  );
}
