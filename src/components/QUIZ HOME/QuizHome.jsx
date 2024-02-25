import React from 'react'
import Styles from './quizhome.module.css'
import { useNavigate } from 'react-router-dom'
const QuizHome = () => {
let navigate=useNavigate()
   let goHtmlPage=()=>{
    navigate('/HtmlPage1')
   }
 let goJsPage=()=>{
  navigate('/JsPage')
 }  
 let goReactPage=()=>{
  navigate('/ReactPage')
 }  
 let goCssPage=()=>{
  navigate('/cssPage')
 }  
  return (
    <div>
        <section className={Styles.QuiZPage}>
         <article className={Styles.QuizInnerPage}>
          <div className={Styles.card} onClick={goHtmlPage}>
            <div><img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" className={Styles.img1} alt="" /></div>
             <h1 className={Styles.text}>HTML Quiz Battle</h1>
          </div>
          <div className={Styles.card} onClick={goCssPage}>
            <div>
                <img className={Styles.img1}  src="data:image/png;base64,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" alt="" />
            </div>
            <h1 className={Styles.text}>CSS Quiz Battle</h1>

          </div>
          <div className={Styles.card} onClick={goJsPage}>
            <div>
                <img className={Styles.img1} src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="" />
            </div>
            <h1 className={Styles.text}>JavaScript  Quiz Battle</h1>

          </div>
          <div className={Styles.card} onClick={goReactPage}>
            <div>
                <img className={Styles.img1} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
            </div>
            <h1 className={Styles.text}>React  Quiz Battle</h1>

          </div>
         </article>
        </section>
    </div>
  )
}

export default QuizHome