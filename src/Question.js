import { useState } from "react";
import { questionData, NUMBER } from "./constant";
const Questions = () => {
  const [questionList, setQuestion] = useState(questionData);
  const [page, setPage] = useState(NUMBER.ONE);

  const handleChange = (event, index) => {
    questionList[index].selectedAnswer = event.target.value;
    setQuestion([...questionList]);
  };

  const resetData = () => {
    setQuestion([...questionData]);
    setPage(NUMBER.ONE);
  };
  const submitData = () => {
    if (page === NUMBER.ONE) {
      setPage(NUMBER.TWO);
    } else {
      setPage(NUMBER.ONE);
    }
  };
  return (
    <>
      <div>
        {questionList.map((question, i) => {
          return (
            <>
              <div className="question-list">
                <div className="question">Question {i + 1}</div>
                <div className="question-card">
                  <h3>{question?.label}</h3>
                  {page === NUMBER.ONE && (
                    <div className="radio-list">
                      {question.answer.map((val) => {
                        return (
                          <div className="radio-option">
                            <input
                              type="radio"
                              value={val.text}
                              name={i}
                              checked={question.selectedAnswer === val.text}
                              onChange={(e) => handleChange(e, i)}
                            />
                            {val.text}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {page === NUMBER.TWO && (
                    <>
                      {!question.selectedAnswer && (
                        <h5 className="not-attempt">User Did not attempted.</h5>
                      )}
                      {question.selectedAnswer && (
                        <h5>Selected answer is {question.selectedAnswer}</h5>
                      )}
                      {question.selectedAnswer &&
                        question.selectedAnswer !== question.correctAnswer && (
                          <>
                            <h5 className="incorect-answer">
                              The answer you have selected is incorrect.
                            </h5>
                            <h5 className="selected-answer">
                              correct answer is {question.correctAnswer}
                            </h5>
                          </>
                        )}
                      {question.selectedAnswer === question.correctAnswer && (
                        <h5 className="selected-answer">
                          You have selected correct answer!!
                        </h5>
                      )}
                    </>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div>
        {page === NUMBER.ONE && (
          <>
            <button className="button1" onClick={() => resetData()}>
              Reset
            </button>
            <button className="button2" onClick={() => submitData()}>
              Submit
            </button>
          </>
        )}
        {page === NUMBER.TWO && (
          <button className="button3" onClick={() => resetData()}>
            Back to Quiz
          </button>
        )}
      </div>
    </>
  );
};
export default Questions;
