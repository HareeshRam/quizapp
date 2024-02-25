import React from 'react'
import Styles from './home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <section className={Styles.HomePage}>
        <Link to='/login'>
        <button className={Styles.regBtn}>Register Now</button>
        </Link>
        </section>
    </div>
  )
}

export default Home