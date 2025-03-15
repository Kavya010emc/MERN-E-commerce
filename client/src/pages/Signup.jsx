import React, { useState } from 'react';
import loginicon from '../assets/signin.gif';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Separate toggle for confirm password

    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilepic: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        // Proceed with the signup logic
        console.log('Data:', data);
    };

    const handleUploadpic = async (e) => {
        const file = e.target.files[0];  // Use e.target.files to get the actual file
        if (file) {
            const imagepic = await imageTobase64(file);  // Convert image to base64
            console.log("imagepic", imagepic);
            setData((prev) => ({
                ...prev,
                profilepic: imagepic,  // Update profilepic in state
            }));
        }
    };

    return (
        <section id="signup">
            <div className="flex items-center justify-center min-h-screen bg-blue-100">
                <div className="bg-white p-5 py-3 w-full mx-auto max-w-md rounded-2xl shadow-md h-auto">
                    <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
                        <div>
                            <img src={data.profilepic || loginicon} alt="Login" />
                        </div>
                        {!data.profilepic && (
                            <form>
                                <label>
                                    <div className='text-xs bg-opacity-80 pb-4 cursor-pointer pt-1 bg-slate-50 text-center absolute bottom-0 w-full'>
                                        Profile pic
                                    </div>
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={handleUploadpic}
                                    />
                                </label>
                            </form>
                        )}
                    </div>
                    <form className="pt-10 flex flex-col gap-2" onSubmit={handleSubmit}>
                        <div className="grid">
                            <label htmlFor="name">Name:</label>
                            <div className="bg-blue-100 p-2">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name here..."
                                    value={data.name}
                                    name="name"
                                    onChange={handleOnChange}
                                    className="w-full h-full outline-none bg-transparent"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid">
                            <label htmlFor="email">Email:</label>
                            <div className="bg-blue-100 p-2">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email here..."
                                    value={data.email}
                                    name="email"
                                    onChange={handleOnChange}
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
                                    type={showPassword ? 'text' : 'password'}
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
                        </div>

                        <div>
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <div className="bg-blue-100 p-2 flex items-center">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirm your password..."
                                    value={data.confirmPassword}
                                    name="confirmPassword"
                                    onChange={handleOnChange}
                                    className="w-full h-full outline-none bg-transparent"
                                    required
                                />
                                <div className="cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>

                        <br />
                        <button
                            type="submit"
                            className="px-6 py-2 w-full max-w-[150px] mx-auto block rounded-full text-white hover:bg-blue-400 cursor-pointer bg-blue-300 transition-all duration-200 hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="my-5">
                        Already Have an Account?{' '}
                        <Link to="/login" className="text-blue-500 underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Signup;
