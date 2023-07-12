import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = (props) => {

  const [credentials, setcredentials] = useState({name:"", email: "", password: "", cpassword:"" })

  // used to redirect to home page 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({name:credentials.name ,email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
  
    if(json.success){
      // save the auth token into local storage and redirect
      localStorage.setItem('token', json.authtoken);
      // used to redirect to home page 
      navigate('/');
    props.showAlert("Successful signup","success")

    }

  else{
    props.showAlert("Account with this email already exists","danger")
  }
    }
  
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
       <div className='container my-5'>
        <h2>Create an account to use I-NoteBook</h2>
      <form onSubmit={handleSubmit}>

      <div className="form-group my-3">
          <label htmlFor="name">User Name</label>
          <input type="text" className="form-control" id="name" onChange={onchange} required  name='name' placeholder="Enter UserName" />
        </div>

        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" onChange={onchange} required  name='email' placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" onChange={onchange} required minLength={5}   name='password' id="exampleInputPassword1" placeholder="Password" />
        </div>

        <div className="form-group my-3">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" className="form-control" onChange={onchange} required minLength={5}   name='cpassword' id="exampleInputPassword1" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default Signup;