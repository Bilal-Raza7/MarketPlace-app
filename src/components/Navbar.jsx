import { useNavigate, useLocation } from "react-router-dom"
import { ReactComponent as ExploreIcone } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as OfferIcone } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as PersonOutlineIcone } from '../assets/svg/personOutlineIcon.svg'
// import ExploreIcone from "../assets/svg/exploreIcon.svg"
// import OfferIcone from "../assets/svg/localOfferIcon.svg"
// import PersonOutlineIcone from "../assets/svg/personOutlineIcon.svg"


function Navbar() { 
    const navigate = useNavigate();
    const location = useLocation();
    const PathMatchRout = (route) => {
        if(route === location.pathname){
            return true
        } 
    }
    
  return (
    <footer className="navbar">
        <nav className="navbarNav">
        <ul className="navbarListItems">
            <li className="navbarListItem " onClick={() => navigate('/explore')}>
                <ExploreIcone fill={ PathMatchRout('/explore')? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                <p className={PathMatchRout('/explore')? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
            </li>
            <li className="navbarListItem" onClick={() => navigate('/offers')}>
                <OfferIcone fill={PathMatchRout('/offers')? '#2c2c2c': '#8f8f8f'} width='36px' height='36px'/>
                <p className={PathMatchRout('/offers')? 'navbarListItemNameActive': 'navbarListItemName'}>Offers</p>
            </li>
            <li className="navbarListItem" onClick={() => navigate('/profile')}>
                <PersonOutlineIcone fill={PathMatchRout('/profile')? '#2c2c2c': '#8f8f8f'} width='36px' height='36px'/>
                <p className={PathMatchRout('/profile')? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
            </li>
        </ul>
        </nav>
    </footer>
  )
}

export default Navbar
