import React from 'react'
<<<<<<< HEAD

function Explore() {
  return (
    <>
      <h1>Explore</h1>
=======
import { Link } from 'react-router-dom';
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import { toast } from 'react-toastify';


function Explore() {

  return (
    <>
      <div className="explore">
        <header>
          <p className="pageHeader">Explore</p>
        </header>
        <main>
          {/* slider */}

          <p className="exploreCategoryHeading">Categories</p>
          <div className="exploreCategories">
          <Link to='/category/rent'>
            <img src={rentCategoryImage} alt="rent" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Placess for Rent</p>
          </Link>
          <Link to='/category/sale'>
            <img src={sellCategoryImage} alt="sale" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for Sale</p>
          </Link>
          </div>
        </main>
      </div>
>>>>>>> a6b21b0 (changes)
    </>
  )
}

export default Explore
