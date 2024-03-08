"use client"
import React, { useContext, useState} from 'react'
import { postUsers } from './Constant'
import { UserContext } from '../context/Contextapi'
import { useRouter } from 'next/navigation'



const Signup = () => {
    const router = useRouter()

    const { email, setEmail, password, setPassword, loading } = useContext(UserContext)


    function HandleSubmit(e) {
        e.preventDefault()
        let data = {
            email: email,
            password: password
        };
        postUsers(data)
        console.log(data)
        // navtologin();
       
        // e.form.reset();
        router.push( "/login") 

    }
    console.log("email", loading)
    return (
        <>
            <form onSubmit={HandleSubmit}>
                <input type='email' placeholder="Email"  onChange={(e) => setEmail(e.target.value)} /><br />
                <input type='password' placeholder="Password" onClick={(e) => setPassword(e.target.value)} /><br />
                <button type='submit'>Submit</button>
            </form>

        </>
    )
}

export default Signup