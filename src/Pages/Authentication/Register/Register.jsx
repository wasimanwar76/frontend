import React, { useState } from 'react'
// import {toast} from "react-toastify"
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../../APIs/authApi'
import { toast } from 'react-toastify'
// import { registerUser } from '../../../Components/APIs/AuthApi'
const Register = () => {

    const Navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    // console.log(username)
    const handleRegister = async (e) => {
        e.preventDefault();
        // console.log(username, email, password,phone)
        try {
            const res = await registerUser(username, email, password,phone)
            //    console.log(res)
            if (res.success) {
                toast.success(res.message)
                return Navigate("/login")
            }
            else if (!res.success) {
                return toast.warning(res.message)
            }
        } catch (error) {
            toast.error("error in login")
            // alert("error")
        }
    }

    return (
        <>

            <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4 md:p-2 lg:py-20">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Sign Up</h2>
                    <form onSubmit={handleRegister} className="space-y-6">
                        {/* Username */}
                        <div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                placeholder="Username"
                                className="w-full px-4 py-2 lg:py-1 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email"
                                className="w-full px-4 py-2 lg:py-1  border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                        <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                placeholder="phone"
                                className="w-full px-4 py-2 lg:py-1  border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password"
                                className="w-full px-4 py-2 lg:py-1  border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white px-4 py-3 lg:py-2  rounded-md font-semibold text-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                Create My Account
                            </button>
                        </div>
                        <div>
                            {/* Sign Up Link */}
                            <p className="mt-6 text-center text-sm text-gray-500">
                                Already have an account?{' '}
                                <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500">
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register


