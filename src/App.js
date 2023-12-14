import Navbar from "./components/Navbar";
<<<<<<< HEAD

=======
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> a6b21b0 (changes)
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";  
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
// import ForgetPassword from "./pages/ForgetPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Explore from "./pages/Explore";
<<<<<<< HEAD
=======
import PrivateRout from "./components/PrivateRout";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
>>>>>>> a6b21b0 (changes)


function App() {
  return (
    <>
    {/* <Explore/> */}
      <Router>
        <Routes>
          <Route path="/explore" element={<Explore/>}/>
<<<<<<< HEAD
          <Route path="/profile" element={<SignIn/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        </Routes>
        <Navbar/>
      </Router>
=======
          <Route path="/profile" element={<PrivateRout/>}>
          <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route path="/category/:categoryName" element={<Category/>}></Route>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/forgetPassword" element={<ForgetPassword/>}/>
          <Route path="/create-listing" element={<CreateListing/>} />
        </Routes>
        <Navbar/>
      </Router>
      <ToastContainer />
>>>>>>> a6b21b0 (changes)
    </>
  );
}

export default App;
