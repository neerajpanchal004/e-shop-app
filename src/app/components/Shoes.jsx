"use client"
import React, { useContext, useEffect} from 'react'
import { UserContext } from '../context/Contextapi'
import { getData } from './Constant'
// import axios from 'axios'


const Shoes = () => {
    // const [mobile, setMobile] = useState()
    const { shoes,setShoes} = useContext(UserContext)


    useEffect(() => {
        let apipoint = "/api/shoes";
        getData(apipoint, setShoes);
    } , []);
    
   
    return (
        <>
            {shoes !== undefined && shoes.map((Shoes) => {
                const { name, image, price} = Shoes;
                return (
                    <div key={name} >
                        <h1>{name}</h1>
                        <img src={image} alt={name} />
                        <p>Price:{price}</p>
                        {/* <p>Storage: {storage}GB</p> */}

                    </div>
                )
            })}
        </>
    )
}


export default Shoes