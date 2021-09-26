import './resetPassword.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ResetPassword = ({match}) => {

  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmpassword]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("");

  const resetPasswordHandler = async (e)=>{
  e.preventDefault()

  const config ={
    header:{
      "Content-Type":"application/json",
    },
  }

  if(password!==confirmpassword){
    setPassword("")
    setConfirmpassword("")
    setTimeout(()=>{
      setError("")
    },5000)
    return setError("Passwords don't match")
  }
  try{
    const {data} = await axios.put(`/api/auth/resetpassword/${match.params.resetToken}`,{password,},config)

    setSuccess(data.data)
  }catch(error){
    setError(error.response.data.error)
    setTimeout(()=>{
      setError("")
    },5000)
  }

  }
  return (
    <div className="resetpassword-container">
    <div className="resetpassword-screen">
      <form onSubmit={resetPasswordHandler} className="resetpassword-screen_form">
        <h3 className="resetpassword-screen_title">Reset Password</h3>
        {error &&<span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}<Link to="/login">Login</Link></span>}
        <div className="resetpassword-form-group">
          <label htmlFor="password">New Password</label>
          <input type="password" required id="password" placeholder="Enter new password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div className="resetpassword-form-group">
          <label htmlFor="confirmpassword">Confirm New Password</label>
          <input type="password" required id="confirmpassword" placeholder="Confirm new password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
    </div>
    </div>
  )
}

export default ResetPassword
