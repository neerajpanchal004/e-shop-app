"use client"
import { getData } from '@/app/components/Constant';
import Loader from '@/app/components/Loader';
import { UserContext } from '@/app/context/Contextapi';
import { useParams, } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const Page = () => {
  
  const {setSingleCardData, singleCardData}=useContext(UserContext)
  // const router = useRouter()
  const { id } = useParams();
  useEffect(() => {
    let api = `/api/menwear/${id}`;
    getData(api, setSingleCardData)
  }, [])

  if (singleCardData.length === 0) {
    return <Loader/>
  }
  const { name, company, price, image,size,rating } = singleCardData;
  let sizeofproduct = size.map((size)=>size+", ")
  return (
    <>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:w-[80%] md:h-[400px] w-full">
        <div class="md:flex">
          <div class="md:flex-shrink-0 my-10 h-96">
            <img class="h-full w-full object-contain " src={image} alt="Product Image"/>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Red Tape</div>
            <p class="mt-2 text-gray-900">Product Name:<b>{name}</b></p>
            <p class="mt-2 text-gray-600">Size: {sizeofproduct}</p>
            <p class="mt-2 text-gray-600">Price: ₹{price}</p>
            <span class="mt-2 text-white px-5 rounded-r-2xl bg-blue-700">{rating}</span>


            <p class="mt-2 text-gray-600">Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="mt-4 sm:flex sm:flex-col sm:gap-5">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
              <button class="ml-4 sm:ml-0 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default Page