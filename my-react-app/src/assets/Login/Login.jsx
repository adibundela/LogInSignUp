import {React,useState} from "react";
import {Link} from "react-router-dom"
import { FaUser, FaLock ,FaEnvelope} from "react-icons/fa";
import "./Login.css";
import axios from 'axios'
function Login() {
  const[formdta,setFormdta] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e)=>{
    const{name,value} = e.target
  
    
    setFormdta({...formdta,[name]:value})
    console.log(formdta);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =await axios.post('http://localhost:5000/login',formdta)
      console.log(res);
    if(res){
      alert(res.data)
    }
    setFormdta({email: "", password: ""})
  }
  

  return (
    <div className="wrapper ">
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <div className="input-box">
            <input onChange={handleChange} name="email" type="email" placeholder="Email" value={formdta.email} />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input onChange={handleChange} name="password" type="password" placeholder="Password" value={formdta.password} />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <Link to ="/signup">Register here</Link>
            </p>
          </div>
        </form>
      </div>

     
    </div>
  );
}

export default Login;
