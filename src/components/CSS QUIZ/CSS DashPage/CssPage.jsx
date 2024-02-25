import React from 'react'
import Styles from './cssPage.module.css'
import { useNavigate } from 'react-router-dom'
const CssPage = () => {
  const navigate=useNavigate()

  let goTest1=()=>{
    navigate('/CssQuiz')
  }
  return (
    <div>
      <section className={Styles.HtmlPage}>
       <article className={Styles.HtmlInnerPage}>
        <div className={Styles.card1}>
          <p>Test1</p>
          <p>CSS 30 MCQ</p>
          <p>Time:15 min</p>
          <div>
            <button className={Styles.letsBtn} onClick={goTest1}>Lets Start</button>
          </div>
        </div>
       </article>
      </section>
    </div>
  )
}

export default CssPage