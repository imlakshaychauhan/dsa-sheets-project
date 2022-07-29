import React from 'react'
import './Login.css'

const login = () => {
  return (
    <div className='login'>
    <form>
        <div className='form-inner'>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor="email">Enter Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Enter Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <input type="submit" value="Login" />
        </div>
    </form>
    </div>
  )
}

export default login