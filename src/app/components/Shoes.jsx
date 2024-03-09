"use client"
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/Contextapi'
import { getData } from './Constant'
import ProductCard from './ProductCard'


const Shoes = () => {
    // const [mobile, setMobile] = useState()
    const { shoes, setShoes } = useContext(UserContext)


    useEffect(() => {
        let apipoint = "/api/shoes";
        getData(apipoint, setShoes);
    }, []);


    return (
        <>
                            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 border-2  gap-x-5 gap-y-16 px-10'>

            {shoes !== undefined && shoes.map((Shoes) => {
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