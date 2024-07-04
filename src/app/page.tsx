'use client'
import { useEffect } from 'react';
import useAuthStore from '../store/store';

export default function Home() {
  const initializeAuth = useAuthStore((state:any) => state.initializeAuth);
  console.log(initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <div className="container mx-auto">
      <h1 className="text-5xl font-bold ">ALDB</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
    </main>
  );
}
