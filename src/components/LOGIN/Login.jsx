import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Styles from './login.module.css'
const Login = () => {
 const [fullName,setFullName]=useState('');
 const [phoneNumber,setPhoneNumber]=useState('');
 const [password,setPassword]=useState('');

 const navigate = useNavigate();
 const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the input (you can add more validation if needed)
    if (!fullName || !phoneNumber) {
      alert('Please fill in all fields.');
      return;
    }
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('password', password);

    // Redirect to the quiz page or perform any other action
      navigate('/quizhome')
    // For now, just display an alert
    // alert('Data saved in local storage. Redirect to the quiz page.');
  };

  return (
    <div>
        <section className={Styles.loginPage}> 
         <article className={Styles.box}>
           <form action="" onSubmit={handleFormSubmit}>
           <h1>Register</h1>

          <input
          type="text" 
          placeholder='FullName'
          required 
          className={Styles.inp1} 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        /> <br />

          <input 
          type="number"
           placeholder='Phone Number' 
           required className={Styles.inp1}
           value={phoneNumber}
           onChange={(e) => setPhoneNumber(e.target.value)}
           /> <br />
           {/* <input 
          type="password"
           placeholder='Set Password' 
           required className={Styles.inp1}
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           /> <br /> */}

          <input 
          type="submit" 
          value={"Get Quiz"} 
          className={Styles.inpBtn} 
           />
           </form>
         </article>
        </section>    
    </div>
  )
}

export default Login