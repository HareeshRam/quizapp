import React, { useState, useEffect } from "react";
import Styles from './question.module.css'
function Question({id, question, options, selected, onSelect, onTimeout, questionNumber }) {
  const [timer, setTimer] = useState(900); // Set the timer to 25 minutes (1500 seconds)
  const [fiveMinutesWarning, setFiveMinutesWarning] = useState(false);
  let userName= localStorage.getItem('fullName')
  let phone=localStorage.getItem('phoneNumber')
  const [name,setname]=useState(userName);
  const [phones,setPhones]=useState(phone);


  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);

        // Check if the timer is less than 300 seconds (5 minutes)
        if (timer <= 300 && !fiveMinutesWarning) {
          setFiveMinutesWarning(true);
        }
      }, 1000);

      return () => {
        clearTimeout(countdown);
      };
    } else {
      onTimeout(); // Call the onTimeout function when the timer reaches 0
    }
  }, [timer, onTimeout, fiveMinutesWarning]);

  return (
    <div>
      <div className={Styles.quizNav}>
      <h1>{name}</h1>
      <h1>{phones}</h1>
      <p>{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')} min</p>
      </div>

      <h4 className={Styles.qname}>{id}.{question}</h4>
      {fiveMinutesWarning && (
        <p style={{ color: "red" }}>Warning: You have 5 minutes left!</p>
      )}
      <ul type={"none"}>
        {options.map((option, index) => (
          <li key={index} className={Styles.quizopt}>
            <label>
              <input
                type="radio"
                name="quiz"
                value={option}
                checked={selected === option}
                onChange={() => onSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
