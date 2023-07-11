import React, { useState } from 'react'
// used to redirect to home page 
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const [credentials, setcredentials] = useState({ email: "", password: "" })

  // used to redirect to home page 
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
   
    if (json.success) {
      // save the auth token into local storage and redirect
      localStorage.setItem('token', json.authtoken);
      // used to redirect to home page 
      navigate('/');
      // to do add alert
      props.showAlert("successful login ","success")
    }
    else {
      props.showAlert("Invalid login information","danger")
    }
  }


  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='my-5'>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" onChange={onchange} value={credentials.email} name='email' placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" onChange={onchange} value={credentials.password} name='password' id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default Login