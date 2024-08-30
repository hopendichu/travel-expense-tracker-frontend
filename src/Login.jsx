
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from './AxiosInstance';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/login/', {
                username,
                password,
            });
            // Handle success (e.g., redirect to dashboard)
            navigate('/dashboard'); // Redirect to the dashboard after login
        } catch (error) {
            console.error('Login failed', error);
            // Handle error (e.g., display error message)
        }
    };

    return (
        
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#98FF98] to-[#004d00]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-[#004d00] mb-8">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-[#004d00] text-white py-2 px-4 rounded-lg hover:bg-[#003d00] focus:outline-none focus:shadow-outline">
              Login
            </button>
            <Link to="/register" className="inline-block align-baseline font-bold text-sm text-[#004d00] hover:text-[#003d00]">
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Login;