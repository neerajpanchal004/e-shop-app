"use client"
import React from 'react'
import Image from 'next/image';
import { Input, InputGroup, InputLeftElement, Link, } from '@chakra-ui/react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // You can choose any icon you like
import ButterFly from './ButterFly';

// Create a custom input component
const CustomInput = () => {
  return (
    <InputGroup w={300} >
      <InputLeftElement pointerEvents="none" children={<FaSearch />}/>
      <Input type="text" placeholder="Search" />
    </InputGroup>
  );
};



const Header = () => {
  
  
  return (
    <>
      <div className='bg-white'>
        <div className='flex justify-between px-5 py-2 fixed top-0 z-10 w-full bg-white'>
          <div className='flex justify-center items-center'>
          <h1 className='font-roboto ml-10 sm:ml-20 text-3xl hover:scale-110 transition-transform'>E-Shop</h1>
          <ButterFly/>

          </div>
          <div className='flex items-center gap-10'>
            <CustomInput />
            <Link href='/login'>
            <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
      
      >
      Login
      </button>
      </Link>

            <div>
              <FaShoppingCart size={30} />
            </div>
          </div>

        </div>

        {/* second section links */}


        {/* shoes */}
        <div className='bg-blue-300 m-5 flex justify-around items-center shadow-xl mt-20'>
          <Link href='/products/shoes'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>

            <Image src="/img/shoes-icon.png" width={100} height={100} />

              <h3>
                Shoes
              </h3>

          </div>
            </Link>



          {/* menwear */}

            <Link href='/products/menwear'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>
            <Image src="/img/menwear-icon.png" width={80} height={10} />

              <h3>
                Menwear              </h3>

          </div>
            </Link>


          

          {/* sports */}

            <Link href='/products/sports'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>
            <Image src="/img/sports-icon1.png" width={95} height={10} objectFit='contain' className='' />

              <h3>
                Sports              </h3>

          </div>
            </Link>

          {/*  mobiles*/}
            <Link href='/products/mobiles'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>
            <Image src="/img/mobile-icon.png" width={85} height={100} />

              <h3>
                Mobiles
              </h3>

          </div>
            </Link>




        </div>
        {/* second section links */}


      </div>
    </>
  )
}

export default Header