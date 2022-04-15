import { questions } from "../common/setup-question-list";

import Quiz from "../common/components/quiz";

export default function Setup() {
  return (
    <>
      <div>
        <Quiz questions={questions} />
      </div>
    </>
  );
}
