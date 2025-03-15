import React from "react";
import Logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="h-20 shadow-md">
            <div className="h-full container mx-auto flex items-center justify-between px-4">
                <Link to={"/"}><img
                    src={Logo}
                    alt="logo"
                    className="w-20 h-20 object-contain" // Adjusted logo width to 8rem (w-32)
                /></Link>
                <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md">
                    <input
                        type="text"
                        placeholder="Search product here..."
                        className="w-full h-9 pl-4 rounded-l-full outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    <div className="text-lg min-w-[50px] h-9 flex items-center justify-center rounded-r-full text-white bg-blue-300 cursor-pointer">
                        <CiSearch />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-6">
                    <div className="text-2xl cursor-pointer">
                        <FiUser />
                    </div>
                    <div className="text-2xl cursor-pointer relative">
                        <span>
                            <GrCart />
                        </span>
                        <div className="bg-blue-300 w-5 h-5 p-1 flex items-center justify-center absolute -top-2 -right-1.5 rounded-full">
                            <p className="text-xs text-white">0</p> {/* Adjusted text size and color */}
                        </div>
                    </div>
                    <div>
                        <Link to={"/login"} className="px-4 py-2 rounded-full text-white hover:bg-blue-400 cursor-pointer bg-blue-300 transition duration-200">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
