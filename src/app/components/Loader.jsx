// import React from 'react'

// const Loader = () => {
//   return (
//     <div className="loader w-16 h-16 rounded-full border-t-4 border-red-300 border-solid animate-spin"></div>

//   )
// }

// export default Loader




// YourComponent.js
"use client"

import React from 'react';

const Loader = () => (
  <>
    <style jsx>{`
      @keyframes pulse {
        0% {
          transform: scale(0.6);
          opacity: 1;
        }
        50% {
          transform: scale(1.2);
          opacity: 0;
        }
        100% {
          transform: scale(0.6);
          opacity: 1;
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .loader-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .loader {
        width: 70px;
        height: 70px;
        position: relative;
      }

      .loader .before {
        content: "";
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 6px solid #007bff;
        position: absolute;
        top: 0;
        left: 0;
        animation: pulse 1s ease-in-out infinite;
      }

      .loader .after {
        content: "";
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 6px solid transparent;
        border-top-color: #007bff;
        position: absolute;
        top: 0;
        left: 0;
        animation: spin 2s linear infinite;
      }

      .loader-text {
        font-size: 24px;
        margin-top: 20px;
        color: #007bff;
        font-family: Arial, sans-serif;
        text-align: center;
        text-transform: uppercase;
      }

      .content {
        display: none;
      }

      .loaded .loader-container {
        display: none;
      }

      .loaded .content {
        display: block;
      }
    `}</style>
    
    <div className="loader-container">
      <div className="loader">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      <div className="loader-text">Loading...</div>
    </div>

    <div className="content hidden">
      {/* Your content goes here */}
    </div>
  </>
);

export default Loader;
