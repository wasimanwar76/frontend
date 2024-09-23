import React, { useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom"
import { useAuth } from '../../../context/authContext';
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [navToggler,setNavToggler] = useState(true)
    const { user, loading ,logout} = useAuth()
    // console.log(user)
    // Event listener to handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 45) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    if (loading) {
        return null
    }
    // console.log(user,"user")

    return (
        <div>
            <nav className={`flex w-full md:pe-10 items-center justify-between bg-black px-4 py-2 text-white z-50 ${isSticky ? 'fixed top-0 left-0 z-50 bg-opacity-70' : 'static'}`}>
                <div className='flex items-center'>
                    <Link to={"/"}><img src="/logo.png" alt="logo" width={"50px"} /></Link>
                    <div className='hidden md:block'>
                        <ul className='flex gap-4 ms-8'>
                            <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/"}><li>Home</li></NavLink>
                            {
                                user?.role === "Admin" && (<>
                                    <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/news-magzine"}> <li>Newspaper/Magzines</li></NavLink>
                                </>)
                            }
                            <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/about"}> <li>About</li></NavLink>
                            <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/contact"}> <li>Contact</li></NavLink>

                            {
                                user?.role === "Student" && (<>
                                    <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/dashboard"}> <li>Dashboard</li></NavLink>
                                </>)
                            }
                             <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/shifts"}> <li>Shifts</li></NavLink>
                        </ul> 
                    </div>
                    <span className='text-4xl md:hidden ms-4' onClick={()=>setNavToggler((prev)=>!prev)}><HiMenu /></span>
                </div>
                <div className='flex gap-4'>
                    {
                        !user?(<>
                            <Link to={"/register"}><button>Sign Up</button></Link>
                            <Link to={"/login"}><button>Log In</button></Link>
                        </>):(<>
                        <button className='border-2 px-4 py-1 rounded-md' onClick={logout}>Logout</button>
                        </>)
                    }
                </div>


                {/* mobile menu */}

                <div className={`absolute z-50 top-14 left-0 bg-black w-full text-xl ps-6 pe-3 md:hidden ${navToggler?"hidden":"block"}`}>
                    <div className="py-4">
                        <ul className='text-xl flex flex-col gap-4 mt-2'>
                            <NavLink onClick={()=>setNavToggler((prev)=>!prev)} className={({ isActive }) => `rounded-md px-3 py-2 text-lg font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/"}><li>Home</li></NavLink>
                            {
                                user?.role === "Admin" && (<>
                                    <NavLink onClick={()=>setNavToggler((prev)=>!prev)} className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/shifts"}> <li>Shifts</li></NavLink>
                                    <NavLink onClick={()=>setNavToggler((prev)=>!prev)} className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/news-magzine"}> <li>Newspaper/Magzines</li></NavLink>
                                </>)
                            }
                            <NavLink onClick={()=>setNavToggler((prev)=>!prev)}  className={({ isActive }) => `rounded-md px-3 py-2 text-lg font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/about"}> <li>About</li></NavLink>
                            <NavLink onClick={()=>setNavToggler((prev)=>!prev)}  className={({ isActive }) => `rounded-md px-3 py-2 text-lg font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/contact"}> <li>Contact</li></NavLink>

                            {
                                user?.role === "Student" && (<>
                                    <NavLink onClick={()=>setNavToggler((prev)=>!prev)} className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/dashboard"}> <li>Dashboard</li></NavLink>
                                </>)
                            }
                             <NavLink onClick={()=>setNavToggler((prev)=>!prev)} className={({ isActive }) => `rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-orange-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`} to={"/shifts"}> <li>Shifts</li></NavLink>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header
