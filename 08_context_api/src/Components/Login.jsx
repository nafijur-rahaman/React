import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'


export default function Login() {
    const [username,setUserName]=useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)




    const handleSubmit =(e)=>{
      e.preventDefault();
      setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' 
       value={username}
       onChange={(e)=> setUserName(e.target.value)} placeholder='Username'/>
      <input type='text' 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='Password'/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
