import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, store the token in localStorage
        localStorage.setItem('token', data.token);

        // Redirect to the protected route
        navigate('/');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="bg-black p-6 w-96 mx-auto mt-20 rounded-md">
    <h2 className="text-white text-center text-2xl font-bold mb-4">Login</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="username" className="text-white block mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="text-white block mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-gray-800 text-white"
        />
      </div>
      <div className='flex justify-center'>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-white text-black  px-4 py-2 rounded-md"
        >
          Login
        </button>
      </div>
    </form>
  </div>
  );
};

export default LoginPage;
