import React from 'react'
import '../CSS/LoginSignup.css'

const LoginSingup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1> Sign Up </h1>
         <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email Adress' />
          <input type="password" placeholder='Your EPassword' />
         </div>
         <button>Continue</button>
         <p className='Loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
        
    </div>
  )
}

export default LoginSingup