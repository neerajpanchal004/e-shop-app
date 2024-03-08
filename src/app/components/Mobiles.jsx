"use client"
import React, { useContext, useEffect,useState } from 'react'
import { UserContext } from '../context/Contextapi'
import {getData} from './Constant'
// import axios from 'axios'


const Mobiles = () => {
    // const [mobile, setMobile] = useState()
    const { mobile,setMobile } = useContext(UserContext)


    // async function getMobiledata() {
    //     // const {setMobile} = useContext(UserContext)

    //     try {
    //         let response = await axios.get('http://localhost:8000/mobiles');
    //         console.log(response.data)
    //         setMobile(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    useEffect(() => {
        let apipoint = "/api/mobiles";
        getData(apipoint, setMobile);
        // getMobiledata()
        // Fetchmobile();
    }, [])
    if (mobile === undefined) {
        return <div>Loading...</div>
    }
    console.log(mobile)
    return (
        <>
            {mobile !== undefined && mobile.map((Mobile) => {
                const { name, image, price, storage,} = Mobile;
                return (
                    <div key={name} >
                        <h1>{name}</h1>
                        <img src={image} alt={name} />
                        <p>Price: ${price}</p>
                        <p>Storage: {storage}GB</p>

                    </div>
                )

            })}
        </>
    )
}


export default Mobiles