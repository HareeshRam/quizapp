import React from 'react'
import Styles from './jsPage.module.css'
import { useNavigate } from 'react-router-dom'
const JsPage = () => {
  const navigate=useNavigate()

  let goJsTest1=()=>{
    navigate('/JsQuiz')
  }
  return (
    <div>
      <section className={Styles.HtmlPage}>
       <article className={Styles.HtmlInnerPage}>
        <div className={Styles.card1}>
          <p>Test1</p>
          <p>JS 30 MCQ</p>
          <p>Time:15 min</p>
          <div>
            <button className={Styles.letsBtn} onClick={goJsTest1}>Lets Start</button>
          </div>
        </div>
       </article>
      </section>
    </div>
  )
}

export default JsPage