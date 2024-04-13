import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
            setUser({
                username:username,
                password:password
            })

    }

  return (
    <div>
        <input type="text" value={username} onChange={(e)=>{
            setUsername(e.target.value)
        }} placeholder='Enter your name' />
<input type="password" value={password} onChange={(e)=>{
    setPassword(e.target.value)
}} placeholder='Enter your password' />

        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login