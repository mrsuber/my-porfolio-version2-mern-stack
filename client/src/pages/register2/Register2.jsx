import './register2.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Register2 = ({history}) => {

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
      setError(error.response.data.error)
        setTimeout(()=>{
          setError("")
        },5000)
    }
  }
  return (
    <div className="align">
    <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="" />
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
    </div>
  )
}

export default Register2
