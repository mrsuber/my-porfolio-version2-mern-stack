import './landing.css'
import Layout from '../../components/layout/Layout'
import Header from '../../components/header/Header'
import Login2 from '../login2/Login2'
export default function Home(){
  return(
    <>
    <Header />

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
      <Login2/>
    </div>
    </>
  )
}
