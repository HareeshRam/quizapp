import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/HOME/Home'
import Login from './components/LOGIN/Login';
import QuizHome from './components/QUIZ HOME/QuizHome';
import HtmlPage1 from './components/HTML QUIZ/HtmlPage1';
import Quiz from './components/HTML QUIZ/TEST1/Quiz';
import CssPage from './components/CSS QUIZ/CSS DashPage/CssPage';
import JsPage from './components/JAVASCRIPT QUIZ/JS DashPage/JsPage';
import ReactPage from './components/REACT QUIZ/REACT DASH PAGE/ReactPage';
import CssQuiz from './components/CSS QUIZ/CSS TEST1/CssQuiz';
import JsQuiz from './components/JAVASCRIPT QUIZ/JS TEST1/JsQuiz';
import ReactQuiz from './components/REACT QUIZ/REACT TEST1/ReactQuiz';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/quizhome"} element={<QuizHome/>} />
        <Route path={"/HtmlPage1"} element={<HtmlPage1/>} />
        <Route path={"/cssPage"} element={<CssPage/>} />
        <Route path={"/JsPage"} element={<JsPage/>} />
        <Route path={"/ReactPage"} element={<ReactPage/>} />

        <Route path={"/Quiz"} element={<Quiz/>}/>
        <Route path={"/CssQuiz"} element={<CssQuiz/>}/>
        <Route path={"/JsQuiz"} element={<JsQuiz/>}/>
        <Route path={"/ReactQuiz"} element={<ReactQuiz/>}/>



    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
