import React,{useEffect,useState} from 'react'
import './header.css'


const Header = () => {
  const [show, handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true)
      }else handleShow(false)

    })
    return () =>{
      window.removeEventListener("scroll");
    }

  },[])

  function handlePopUp(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popup = document.getElementById('popup')
    popup.classList.toggle('active2')
    console.log("i am sopose to handdle pop up")
  }
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
