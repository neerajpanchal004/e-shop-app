"use client"
import React from 'react'
import Image from 'next/image';
import { Input, InputGroup, InputLeftElement, Link, Button } from '@chakra-ui/react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // You can choose any icon you like

// Create a custom input component
const CustomInput = () => {
  return (
    <InputGroup w={300}>
      <InputLeftElement pointerEvents="none" children={<FaSearch />} />
      <Input type="text" placeholder="Search" />
    </InputGroup>
  );
};

const Header = () => {
  return (
    <>
      <div className='bg-white'>
        <div className='flex justify-between px-5 py-2 fixed top-0 z-10 w-full bg-white'>
          <h1>LOGO</h1>
          <div className='flex items-center gap-10'>
            <CustomInput />
            <Link href='/login'>
              <Button colorScheme='teal' variant='outline'>
                Login
              </Button>
            </Link>

            <div>
              <FaShoppingCart size={30} />
            </div>
          </div>

        </div>

        {/* second section links */}


        {/* shoes */}
        <div className='bg-red-300 m-5 flex justify-around items-center shadow-xl mt-16'>
          <Link href='/shoes'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>

            <Image src="/img/shoes-icon.png" width={100} height={100} />

              <h3>
                Shoes
              </h3>

          </div>
            </Link>



          {/* menwear */}

            <Link href='/menwear'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>
            <Image src="/img/menwear-icon.png" width={80} height={10} />

              <h3>
                Menwear              </h3>

          </div>
            </Link>


          

          {/* sports */}

            <Link href='/sports'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>
            <Image src="/img/sports-icon1.png" width={95} height={10} objectFit='contain' className='' />

              <h3>
                Sports              </h3>

          </div>
            </Link>

          {/*  mobiles*/}
            <Link href='/mobiles'>
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