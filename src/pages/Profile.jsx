import React from 'react'
<<<<<<< HEAD

function Profile() {
  return (
    <>
      <h1>Profile</h1>
    </>
  )
=======
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, updateProfile} from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'
 

function Profile() {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
  const { name, email } = formData;

  const navigate = useNavigate();
  
  const onLogOut = () => {
    auth.signOut()
    navigate('/explore');
  }

const onSubmit = async() => {
  try {
    if(auth.currentUser.displayName !== name){
      // update name  in fireBase
      await updateProfile(auth.currentUser,{
        displayName: name
      })
      // update in fireStore
      const userRef = doc( db, 'users', auth.currentUser.uid)
      await updateDoc(userRef,{
        name,
      })
    }
  } catch (error) {
    toast.error('something went wrong');
  }
}

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.id]:e.target.value,
  }))
}

  return <>
  <div className="profile">
    <header className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button type='button' className="logOut" onClick={onLogOut}>Log Out</button>
    </header>
    <main>
      <div className="profileDetailsHeader">
        <p className="profileDetailsText">Personal Details</p>
        <p className="changePersonalDetails" onClick={() => { changeDetails && onSubmit() 
        setChangeDetails((prevState) => !prevState)
        }}>{changeDetails ? 'Done' : 'Change'}</p> 
      </div>
      <div className="profileCard">
        <form >
          <input type="text" id='name' 
          className={changeDetails ? 'profileName': 'profileNameActive'} 
          disabled={!changeDetails}
          value={name}
          onChange={onChange} />

          <input type="email  " id='email' 
          className={changeDetails ? 'profileEmail': 'profileEmailActive'} 
          disabled={!changeDetails}
          value={email}
          onChange={onChange} />
        </form>
      </div>
      
      <Link className="createListing" to='/create-listing'>
        <img src={homeIcon} alt="Home" />
        <p>Sell or rent your home</p>
        <img src={arrowRight} alt="arrow" />
      </Link>
    </main>
  </div>
  </>
>>>>>>> a6b21b0 (changes)
}

export default Profile
