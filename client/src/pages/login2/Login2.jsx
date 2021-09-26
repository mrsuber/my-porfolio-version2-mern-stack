import './login2.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login2 = ({history}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')

  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      history.push("/admin")
    }
  },[history])


  const loginHandler= async (e)=>{
    e.preventDefault()
    const config = {
      header:{
        "Content-Type":"application/json"
      }
    }


    try{
       const {data}= await axios.post("/api/auth/login",{email,password},config);
       localStorage.setItem("authToken",data.token)
       history.push("/admin")
    }catch(error){
      setError(error?.response?.data?.error)
        setTimeout(()=>{
          setError("")
        },5000)
    }
  }
  return (
    <div className="align">
    <div className="grid align__item">

    <div className="register">

      <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"/><stop offset="100%" stop-color="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>

      <h2>Sign Up</h2>

      <form action="" method="post" className="form">

        <div className="form__field">
          <input type="email" placeholder="info@mailaddress.com" />
        </div>

        <div className="form__field">
          <input type="password" placeholder="••••••••••••" />
        </div>

        <div className="form__field">
          <input type="submit" value="Sign Up" />
        </div>

      </form>

      <p>Already have an accout? <a href="#">Log in</a></p>

    </div>

  </div>
    </div>
  )
}

export default Login2
