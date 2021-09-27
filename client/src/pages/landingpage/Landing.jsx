import './landing.css'
import Layout from '../../components/layout/Layout'
import Header from '../../components/header/Header'
import Login2 from '../login2/Login2'
import Register2 from '../register2/Register2'
export default function Home({history}){
  function handlePopUp(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active1')
    var popup = document.getElementById('popup')
    popup.classList.toggle('active2')

  }

  function handlePopUp2(){

    var popup2 = document.getElementById('popup2')
    popup2.classList.toggle('active2')
    var popup = document.getElementById('popup')
    popup.classList.toggle('active2')

  }

  function closeform(){
    var popup2 = document.getElementById('popup2')
    var popup = document.getElementById('popup')
    if(popup.classList[1] && popup.classList[1]==="active2"){
      popup.classList.toggle('active2')
    }
    if(popup2.classList[1] && popup2.classList[1]==="active2"){
      popup2.classList.toggle('active2')
    }
    var blur = document.getElementById('blur')
    blur.classList.toggle('active1')
  }
  return(
    <>
    <Header handlePopUp={handlePopUp}/>

    <div className="homepage" id="blur">

    <div className="block">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="text">
      <h1>The new Standard in online payment</h1>
      <p>Stripe id the best software platform for running an internet business.
      We handle billions of dollars every year for forward-thinking businesses around the world
      </p>
      <div className="button-area">
        <a href="#"> Start Now </a>
        <a href="#"> Contact Sales </a>

      </div>
    </div>
    <div className="Section-2">
    </div>

    </div>

    <div className="popup" id="popup">
    <Login2 history={history} handlePopUp2={handlePopUp2} closeform={closeform}/>
    </div>
    <div className="popup2" id="popup2">
      <Register2 history={history} handlePopUp2={handlePopUp2} closeform={closeform}/>
    </div>
    </>
  )
}
