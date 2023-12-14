import React from 'react'
<<<<<<< HEAD

function ForgetPassword() {
  return (
    <div>
      <h1>ForgetPassword</h1>
=======
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgetPassword() {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email was sent")
    } catch (error) {
      toast.error('could not sent email')
    }
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forget Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input type="email" 
          placeholder='Email'
          id='email' 
          className="emailInput" 
          value={email}
          onChange={onChange}/>
          <Link className='forgotPasswordLink' to='/signIn'>Sign In</Link>
          <div className="signInBar">
            <div className="signInText">Send Rest Link</div>
            <button className="signInButton">
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
>>>>>>> a6b21b0 (changes)
    </div>
  )
}

export default ForgetPassword
