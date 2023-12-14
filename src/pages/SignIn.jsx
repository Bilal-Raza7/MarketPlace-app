import React from 'react'
import { useState, } from 'react'
import { Link, useNavigate} from 'react-router-dom'
<<<<<<< HEAD
import { ReactComponent as ArrowRight } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
=======
import {  toast } from "react-toastify";
import { ReactComponent as ArrowRight } from '../assets/svg/keyboardArrowRightIcon.svg'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../components/OAuth';

function SignIn() {


>>>>>>> a6b21b0 (changes)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })
    const { email, password } = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
<<<<<<< HEAD
=======
    const onSubmit = async (e) =>{
        e.preventDefault();
        try {
            const auth = getAuth()
            const userCreential = await signInWithEmailAndPassword(auth,email,password)
            if(userCreential.user){
                navigate('/explore')
            }
        } catch (error) {
            toast.error("bad request")
            // console.log(error)
            console.log('error caught')
        }
    }
>>>>>>> a6b21b0 (changes)

  return (
    <>
      <div className="pageContainer">
        <header>
            <p className="pageHeader">
                Welcome Back!
            </p>
        </header>
<<<<<<< HEAD
        <form>
=======
        <form onSubmit={onSubmit}>
>>>>>>> a6b21b0 (changes)
            <input type="email" className="emailInput" placeholder='Email' id='email' value={email} onChange={onChange}/>
            <div className='passwordInputDiv'>
            <input className="passwordInput" type={showPassword ? 'text' : 'password'} placeholder='password' value={password} id='password' onChange={onChange}  />
            <img src={visibilityIcon} alt="show password" className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>
            <Link className='forgotPasswordLink' to='/forgetpassword'>Forgot Password</Link>
            <div className="signInBar">
                <p className="signInText">Sign In</p>
                <button className="signInButton">
                    <ArrowRight fill='#fffff' width='34px' heigh='34px'/>
                </button>
<<<<<<< HEAD
                
            </div>
            <Link to='/signUp' className='registerLink'>Sign Up Instead</Link>
        </form>
=======
            </div>
        </form>
        <OAuth/>
        <Link to='/signUp' className='registerLink'>Sign Up Instead</Link>
>>>>>>> a6b21b0 (changes)
      </div>
    </>
  )
}

export default SignIn
