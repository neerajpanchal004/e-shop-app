"use client"
import React, { useContext, useEffect,useState } from 'react'
import { UserContext } from '../context/Contextapi'
import { getData } from './Constant'
import ProductCard from './ProductCard'
import Loader from './Loader'


const Shoes = () => {
    const { shoes, setShoes,setRoute,loading,setLoading } = useContext(UserContext)
    const [first, setFirst] = useState()


    useEffect(() => {
        setTimeout(() => {
            let apipoint = "/api/getProducts?category=shoes";
            getData(apipoint, setFirst);
        }, 10000);
       
    }, []);
// if(first===undefined){

//     return <Loader/>
// }

setRoute("shoes")
    return (
        <>
                            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-x-5 gap-y-16 px-10 py-10'>

            {first !==undefined && first.map((Shoes) => {
                // const { name, image, price} = Shoes;
                return (
                    // <div key={name} >
                    //     <h1>{name}</h1>
                    //     <img src={image} alt={name} />
                    //     <p>Price:{price}</p>
                    //     {/* <p>Storage: {storage}GB</p> */}

                    // </div>
                        <ProductCard key={Shoes.id} {...Shoes} />

                )
            })}
                                </div>

        </>
    )
}


export default Shoes