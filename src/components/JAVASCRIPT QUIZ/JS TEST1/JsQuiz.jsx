import React, { useState, useEffect } from "react";
import Question from "./JsQuestion";
import questionsData from "./JsQuestions";
import Styles from './jsQuiz.module.css'
function JsQuiz() {
  let userName= localStorage.getItem('fullName')
  const[currentId,setCurrentId]=useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [name,setname]=useState(userName);
  console.log(score);
  console.log(selectedAnswer);
  useEffect(() => {
    if (timerExpired && currentQuestion < questionsData.length - 1) {
      handleNext();
    }
  }, [timerExpired, currentQuestion]);

  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentId(currentId+1)
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setQuizCompleted(true);
  };

  const handleTimeout = () => {
    setTimerExpired(true);
  };

  // Determine the message based on the score
  let message = "";
  if (quizCompleted) {
    if (score >= questionsData.length * 0.9) {
      message = "You are excellent in javaScript 👍";
    } else if (score >= questionsData.length * 0.7) {
      message = "You are just good in JavaScript 😉";
    } else if (score < questionsData.length * 0.5) {
      message = "You are poor in JavaScript. Please learn more 😔 ";
    }
  }
     
  return (
    <div>
     <section className={Styles.QuizPage}>
      <article className={Styles.innerQuizPage}>
     {!quizCompleted ? (
        <div>
          <Question
            id={questionsData[currentId].id}
            question={questionsData[currentQuestion].question}
            options={questionsData[currentQuestion].options}
            selected={selectedAnswer}
            onSelect={handleSelect}
            onTimeout={handleTimeout}
          />
          <button onClick={handlePrevious} disabled={currentQuestion === 0} className={Styles.prevBtn}>
            Previous
          </button>
          <button className={Styles.nextBtn} onClick={handleNext}>Next</button>
        </div>
      ) : (
        <div className={Styles.compl}>
          <h2>Dear {name} You are successfully completed <span>🙂</span></h2>
          <h3>Your Scored: {score}/{questionsData.length}</h3>
          <h4>{message}</h4> {/* Display the message */}
        </div>
      )}

      {/* {quizCompleted && (
        <button onClick={handleSubmit}>Submit</button>
      )} */}
      </article>
     </section>
    </div>
  );
}

export default JsQuiz;
