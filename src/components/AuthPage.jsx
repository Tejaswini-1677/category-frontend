import { useState } from "react";
import axios from "axios";

const API = "https://category-backend-wkzn.onrender.com/api/auth";
import { registerCustomer, loginUser } from "../services/customerService";

const AuthPage = () => {

  const [isLogin,setIsLogin] = useState(true);

  const [form,setForm] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    if(isLogin){

      const res = await loginUser({
        email: form.email,
        password: form.password
      });

      const user = res.data;

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login Successful");

      // ROLE BASED REDIRECT
      //if(user.role === "ADMIN"){
       // window.location.href="/customers";
      //}else{
       // window.location.href="/shop";
      //}

    }else{

      await registerCustomer(form);

      alert("Registration Successful");

      setIsLogin(true);

    }

  } catch(err){
    alert("Invalid Credentials");
  }
};

  return(

    <div className="form-card">

      <h2>{isLogin ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit}>

        {!isLogin && (
          <>
          <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
          />

          <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
          />

          <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
          />
          </>
        )}

        <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        />

        <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        />

        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>

      </form>

      <br/>

      <button onClick={()=>setIsLogin(!isLogin)}>
        {isLogin ? "New User? Register" : "Already have account? Login"}
      </button>

    </div>

  )
}

export default AuthPage;