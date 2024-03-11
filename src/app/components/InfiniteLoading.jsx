// // // components/LoadingComponent.js
// // "use client"

// // import React from 'react';

// // const LoadingComponent = () => (
// //   <>
// //     <style jsx>{`
// //       .svgbox {
// //         --blue: rgb(148, 66, 63);
// //         stroke: var(--blue);
// //         stroke-width: 5;
// //         fill: none;
// //         stroke-dasharray: 50, 14;
// //         stroke-dashoffset: 192;
// //         animation: dash_682 1.4s linear infinite;
// //       }

// //       @keyframes dash_682 {
// //         72.5% {
// //           opacity: 1;
// //         }

// //         to {
// //           stroke-dashoffset: 1;
// //         }
// //       }
// //     `}</style>

// //     <div className="loading">
// //       <svg viewBox="0 0 187.3 93.7" height="200px" width="300px" className="svgbox">
// //         <defs>
// //           <linearGradient y2="0%" x2="100%" y1="0%" x1="0%" id="gradient">
// //             <stop stopColor="pink" offset="0%"></stop>
// //             <stop stopColor="blue" offset="100%"></stop>
// //           </linearGradient>
// //         </defs>
// //         <path
// //           stroke="url(#gradient)"
// //           d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
// //         ></path>
// //       </svg>
// //     </div>
// //   </>
// // );

// // export default LoadingComponent;


// "use client"
// import { useEffect } from 'react';

// const Loader = () => {
//   useEffect(() => {
//     const loaderEyes = document.querySelectorAll('.loader__eye1, .loader__eye2');
//     const loaderMouth2 = document.querySelector('.loader__mouth2');

//     const eye1Animation = () => {
//       loaderEyes.forEach((eye) => {
//         eye.style.animation = 'eye1 3s ease-in-out infinite';
//       });
//     };

//     const eye2Animation = () => {
//       loaderEyes.forEach((eye) => {
//         eye.style.animation = 'eye2 3s ease-in-out infinite';
//       });
//     };

//     const mouth1Animation = () => {
//       loaderMouth2.style.animation = 'mouth1 3s ease-in-out infinite';
//     };

//     const mouth2Animation = () => {
//       loaderMouth2.style.animation = 'mouth2 3s ease-in-out infinite';
//     };

//     eye1Animation();
//     setTimeout(() => {
//       eye2Animation();
//       mouth1Animation();
//       setTimeout(() => {
//         mouth2Animation();
//       }, 1500);
//     }, 1500);

//     // Cleanup animations on component unmount
//     return () => {
//       loaderEyes.forEach((eye) => {
//         eye.style.animation = '';
//       });
//       loaderMouth2.style.animation = '';
//     };
//   }, []);

//   return (
//     <div className="w-32 h-32">
//       <svg
//         height="108px"
//         width="108px"
//         viewBox="0 0 128 128"
//         className="loader"
//       >
//         {/* ... (rest of your SVG content) ... */}
//       </svg>
//     </div>
//   );
// };

// export default Loader;

import React from 'react'

const Loader = () => {
  return (
    <div>
  <svg height="108px" width="108px" viewBox="0 0 128 128" class="loader">
    <defs>
      <clipPath id="loader-eyes">
        <circle transform="rotate(-40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye1"></circle>
        <circle transform="rotate(40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye2"></circle>
      </clipPath>
      <linearGradient y2="1" x2="0" y1="0" x1="0" id="loader-grad">
        <stop stop-color="#000" offset="0%"></stop>
        <stop stop-color="#fff" offset="100%"></stop>
      </linearGradient>
      <mask id="loader-mask">
        <rect fill="url(#loader-grad)" height="128" width="128" y="0" x="0"></rect>
      </mask>
    </defs>
    <g stroke-dasharray="175.93 351.86" stroke-width="12" stroke-linecap="round">
      <g>
        <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(193,90%,50%)"></rect>
        <g stroke="hsl(193,90%,50%)" fill="none">
          <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
          <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
        </g>
      </g>
      <g mask="url(#loader-mask)">
        <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(223,90%,50%)"></rect>
        <g stroke="hsl(223,90%,50%)" fill="none">
          <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
          <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
        </g>
      </g>
    </g>
  </svg>
</div>
  )
}

export default Loader