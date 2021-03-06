import './login.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login = ({history}) => {

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
    <div className="login-container">
    <div className="login-screen">

    <form onSubmit={loginHandler} className="login-screen_form">
      <h3 className="login-screen_title">Login</h3>
      {error && <span className="error-message">{error}</span>}


      <div className="login-form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" required id="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)} tabIndex={1}/>
      </div>

      <div className="login-form-group">
        <label htmlFor="password">Password:<Link to="/forgotpassword" className="login-screen_forgotpassword" tapIndex={4}>Forgot Password?</Link></label>
        <input type="password" required id="password" placeholder="Enter Password" value={password} onChange={(e) =>setPassword(e.target.value)} tabIndex={2}/>
      </div>


      <button type="submit" className="btn btn-primary" tabIndex={3}>Login</button>

      <span className="login-screen_subtext">Don't have an account? <Link to="/register">Register</Link></span>
    </form>



    </div>
    </div>
  )
}

export default Login
