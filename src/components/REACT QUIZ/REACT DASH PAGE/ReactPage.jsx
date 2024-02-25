import React from 'react'
import Styles from './reactPage.module.css'
import { useNavigate } from 'react-router-dom'
const ReactPage = () => {
  const navigate=useNavigate()

  let goReactTest1=()=>{
    navigate('/ReactQuiz')
  }
  return (
    <div>
      <section className={Styles.HtmlPage}>
       <article className={Styles.HtmlInnerPage}>
        <div className={Styles.card1}>
          <p>Test1</p>
          <p>REACT 30 MCQ</p>
          <p>Time:15 min</p>
          <div>
            <button className={Styles.letsBtn} onClick={goReactTest1}>Lets Start</button>
          </div>
        </div>
       </article>
      </section>
    </div>
  )
}

export default ReactPage