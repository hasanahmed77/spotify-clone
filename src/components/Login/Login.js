import React from 'react'
import { loginUrl } from '../Spotify/spotify'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <a href={loginUrl} className='btn-login'>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login