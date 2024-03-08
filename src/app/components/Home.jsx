"use client"
import React from 'react'
import ImageSlider from './ImageSlider'
import Accordian from './Accordian'
import BoxSlider from './Boxslider'


const Home = () => {
  return (
    <>
    <div className='px-5'>
    <ImageSlider />
    {/* three lorem card */}
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 m-10'>
                <div className='border-[1px] border-black p-10 rounded-xl hover:scale-105 transition-transform'>
                    <div className='w-10 border-teal-600 border-2 rounded-2xl my-2'></div>
                    <p>"Lorem ipsum dolorrporis ex ipsum explicabo corrupti omnis autem, non adipisci maiores quas eveniet tempore, nam cum"</p>
                    <p className='my-5 font-bold'>Lorem ipsum</p>

                </div>

                <div className='border-[1px] border-black p-10 rounded-lg hover:scale-105 transition-transform'>
                    <div className='w-10 border-teal-600 border-2 rounded-2xl my-2'></div>
                    <p>"Lorem ipsum dolorrporis ex ipsum explicabo corrupti omnis autem, non adipisci maiores quas eveniet tempore, nam cum"</p>
                    <p className='my-5 font-bold'>Lorem ipsum</p>

                </div>

                <div className='border-[1px] border-black p-10 rounded-lg hover:scale-105 transition-transform'>
                    <div className='w-10 border-teal-600 border-2 rounded-2xl my-2'></div>
                    <p>"Lorem ipsum dolorrporis ex ipsum explicabo corrupti omnis autem, non adipisci maiores quas eveniet tempore, nam cum"</p>
                    <p className='my-5 font-bold'>Lorem ipsum</p>

                </div>
            </div>
        {/* three lorem card */}

        <BoxSlider />

    <Accordian />
    </div>
   
    </>
  )
}

export default Home