import {useState,useEffect} from 'react'
import Header2 from '../../components/header2/Header2'
import axios from 'axios'

const PrivateScreen = ({history}) => {
  const [error,setError] =useState("")
  const [privateData,setPrivateData]=useState("");

  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
      history.push("/")
    }
    const fetchPrivateData = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        const {data} = await axios.get("/api/private",config)

        setPrivateData(data.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    fetchPrivateData()
  },[history])

  const logoutHandler=()=>{
    localStorage.removeItem("authToken")
    history.push("/")
  }
  return (
    error? <span className="error-message">{error}</span>
    :
    <>

    <Header2 logoutHandler={logoutHandler}/>

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



      <div style={{background:"green", color:"white"}}>PrivateData:{privateData}</div>

    </>

  )
}

export default PrivateScreen
