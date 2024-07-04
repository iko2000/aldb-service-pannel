'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {auth} from '../../firebase.config'; // Adjust this path if needed
import { signInWithEmailAndPassword } from 'firebase/auth';
import useAuthStore from "../../store/store";


const LoginPage = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const setUser = useAuthStore((state:any) => state.setUser);

  const handleLogin = async () => {
    try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
      alert('Logged in successfully!');
      router.push('/'); // Redirect to /reports page after successful login
    } catch (error) {
      alert('Error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-green p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;