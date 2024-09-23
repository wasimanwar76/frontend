import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../../APIs/authApi';
import { useAuth } from '../../../context/authContext';

const Login = () => {
  const Navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password)
      // console.log(res)
      if(res.success){
        toast.success(res.message)
        login(res.user)
        return Navigate("/")
      }
      if(!res.success){
        return toast.warning(res.message)
      }
    } catch (error) {
      toast.error("error in login")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4 md:p-2">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 ">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Log In</h2>
        <form onSubmit={handleLogin} className="space-y-6">
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
              className="w-full px-4 py-4 md:py-2 lg:py-1 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-4 md:py-2 lg:py-1 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-4 md:py-3 rounded-md font-semibold text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
