import {useState,useEffect} from 'react'
import Header2 from '../../components/header2/Header2'
import axios from 'axios'
import dashbourd from '../landingpage/dashboard.png'
import SecondaryButton from "../../components/buttons/SecondaryButton"
import Layout from '../../components/layout/Layout'
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

    {/* header equivalent to above body{header tag} tag*/}
    <Header2 logoutHandler={logoutHandler}/>
    {/* header ends*/}

    {/* body equivalent to  body tag start*/}
    <div className="homepage" id="blur">

        <div className="home-cover" id="home">
          {/*this is where the gradient starts*/}
                <div className="block">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
          {/*this is where the gradient ends*/}

          {/*this is where the text container starts*/}
                <div className="left-content">
                    <div className="text">
                    <h1> My portfolio web version 2.0</h1>
                    <p>
                    A MERN aplication with an amazing dashboard and a tutorial section to help perpare for job coding chanlange.
                    </p>
                      <div className="button-area">
                        <a href="#"> Contact </a>

                        <SecondaryButton  name={"Dashbourd"}/>

                      </div>
                    </div>
                </div>
          {/*this is where the text container ends*/}

          {/*image container showing dashboard starts*/}
                <div className="right-content">
                    <div className="img-wrapper-tablet">
                      <img src={dashbourd} alt="" />
                    </div>
                </div>
          {/*image container showing dashboard ends*/}
        </div>
      <Layout />
    </div>
    {/* body equivalent to  body tag end*/}

    {/* footer start*/}
    {/* footer end*/}

    </>

  )
}

export default PrivateScreen
