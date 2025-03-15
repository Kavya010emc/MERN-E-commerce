import React, { useState } from 'react';
import loginicon from '../assets/signin.gif';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // Corrected the typo here

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const[data,setData]=useState({
    email:"",
    password:""
  })

  const handleOnChange = (e) =>{
    const { name , value } = e.target

    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
}
const handleSubmit=(e)=>{
  e.preventDefault()
}

console.log("data login",data)

  return (
    <section id="login">
  <div className="flex items-center justify-center min-h-screen bg-blue-100">
    <div className="bg-white p-5 py-3 w-full mx-auto max-w-md rounded-2xl shadow-md h-auto">
      <div className="w-20 h-20 mx-auto">
        <img src={loginicon} alt="Login" />
      </div>
      <form className="pt-10" onSubmit={handleSubmit}>
        <div className="grid">
          <label htmlFor="email">Email:</label>
          <div className="bg-blue-100 p-2">
            <input
              id="email"
              type="email"
              placeholder="Enter your email here..."
              onChange={handleOnChange}
               value={data.email}
              name="email"
              className="w-full h-full outline-none bg-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <div className="bg-blue-100 p-2 flex items-center">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'} // Toggling between text and password
              placeholder="Enter your password here..."
              value={data.password}
              name="password"
              onChange={handleOnChange}
              className="w-full h-full outline-none bg-transparent"
              required
            />
            <div className="cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <Link to={'forgot-password'} className="block text-blue-500 underline w-fit ml-auto">Forgot Password?</Link>
        </div>
        <br />
        <button
          type="submit"
          className="px-6 py-2 w-full max-w-[150px] mx-auto block rounded-full text-white hover:bg-blue-400 cursor-pointer bg-blue-300 transition-all duration-200 hover:scale-105"
        >
          Login
        </button>
      </form>
      <p className="my-5">Don't Have an Account? <Link to={"/sign-up"} className="text-blue-500 underline">Sign up</Link></p>
    </div>
  </div>
</section>

  );
};

export default Login;
