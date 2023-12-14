import React from 'react'
import { useState, } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../assets/svg/keyboardArrowRightIcon.svg'
<<<<<<< HEAD
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
=======
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setData, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import {  toast } from "react-toastify"
import { db } from '../firebase.config'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../components/OAuth'
>>>>>>> a6b21b0 (changes)

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
      name:'',
        email:'',
        password:'',
    })
    const { name,email, password } = formData
    const navigate = useNavigate()
<<<<<<< HEAD
=======
    
>>>>>>> a6b21b0 (changes)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
<<<<<<< HEAD
=======
    const onSubmit = async (e) => {
      e.preventDefault();

      try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        )
        const user = userCredential.user
        updateProfile(auth.currentUser, {
          displayName: name,
        })
        const copyFormData = {...formData}
       delete copyFormData.password;
        copyFormData.timestamp =serverTimestamp()
        await setDoc(doc(db, 'users',user.uid), copyFormData)

        navigate('/explore')
      } catch (error) {
        toast.error("bad request")

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
            <input type="text" className="nameInput" placeholder='Name' id='name' value={name} onChange={onChange}/>
            <input type="email" className="emailInput" placeholder='Email' id='email' value={email} onChange={onChange}/>
            <div className='passwordInputDiv'>
            <input className="passwordInput" type={showPassword ? 'text' : 'password'} placeholder='password' value={password} id='password' onChange={onChange}  />
            <img src={visibilityIcon} alt="show password" className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>
            {/* <Link className='forgotPasswordLink' to='/forgetpassword'>Forgot Password</Link> */}
            <div className="signUpBar">
                <p className="signUpText">Sign Up</p>
                <button className="signInButton">
                    <ArrowRight fill='#fffff' width='34px' heigh='34px'/>
                </button>
                
            </div>
<<<<<<< HEAD
=======
            <OAuth/>
>>>>>>> a6b21b0 (changes)
            <Link to='/signIn' className='signInLink'>Sign In Instead</Link>
        </form>
      </div>
    </>
  )
}

export default SignUp
