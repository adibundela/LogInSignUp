    import {React,useState} from "react";
import { FaUser, FaLock ,FaEnvelope} from "react-icons/fa";
import {Link} from "react-router-dom";
import './Signup.css';
import axios from "axios";
function Signup() {
  const [formdta,setFormdta] = useState({
    email: "",
    username: "",
    password: ""
  })
  
  const handleChange =(e)=>{
    const {name,value} = e.target
    setFormdta({...formdta,[name]:value})
    
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    // send data to server 
    console.log(formdta);
    
    const res = await axios.post('http://localhost:5000/',formdta)

    if(res){
      alert(res.data)
    }
    else{
      alert("something went wrong")
    }




    // setFormdta({email: "", username: "", password: ""})
    // route to home page
  }
  return (
    <div className="wrapper">
      <div className="form-box Signup">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input value={formdta.email} onChange={handleChange} name="email" type="email" placeholder="Email" />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input value={formdta.username} onChange={handleChange} name="username" type="text" placeholder="Username" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input value={formdta.password} onChange={handleChange} name="password" type="password" placeholder="Password" />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input  type="checkbox" /> I agree to terms & conditions
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Register</button>

          <div className="register-link">
            <p>
              Already have an account ? <Link to = "/" >Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
