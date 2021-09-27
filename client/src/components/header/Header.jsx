import React,{useEffect,useState} from 'react'
import './header.css'


const Header = ({handlePopUp}) => {
  const [show, handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true)
        return () =>{
          window.removeEventListener("scroll");
        }
      }else handleShow(false)
      return () =>{
        window.removeEventListener("scroll");
      }
    })


  },[])


  return (
    <header className="header__container">
    <div className={`header ${show && "nav__black" }`}>
      <nav className="navigation" >
      <div className="navbar-left">
        <a href="#" className="navbar__logo">Logo</a>
      </div>

        <div className="navbar-right">
          <a href="#">Home</a>
          <a href="#">Interview Prep</a>
          <a href="#">Porfolio</a>
          <a href="#">Contact</a>
          <span onClick={handlePopUp}>Dashbourd</span>
        </div>
      </nav>
    </div>

    </header>
  )
}

export default Header
