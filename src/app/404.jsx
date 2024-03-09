// pages/404.js or pages/404.jsx
import React from 'react'
import { useRouter } from 'next/router'
import { FaArrowCircleLeft } from 'react-icons/fa' // Import the Font Awesome icon for back arrow

const Custom404 = () => {
  const router = useRouter()

  const handleBackToHome = () => {
    router.push('/')
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__shakeX">
          404 - Page Not Found
        </h1>
        <p className="text-lg mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={handleBackToHome}
          className="bg-white text-gray-800 flex items-center gap-1 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 focus:outline-none"
        >
          <FaArrowCircleLeft /> Back to Home
        </button>
      </div>
    </div>
  )
}

export default Custom404