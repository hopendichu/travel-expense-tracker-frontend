
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from './AxiosInstance';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/register/', {
                username,
                password,
            });
            // Handle success (e.g., redirect to login)
        } catch (error) {
            console.error('Registration failed', error);
            // Handle error
        }
    };

    return (
       
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#98FF98] to-[#004d00]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-[#004d00] mb-8">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
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
              Register
            </button>
            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-[#004d00] hover:text-[#003d00]">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Register;
