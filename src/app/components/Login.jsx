"use client"

import { useContext } from "react";
import { UserContext } from "../context/Contextapi";
import { Link } from "@chakra-ui/react";
// import { UserContext } from "../context/Contextapi";
import { useRouter } from "next/navigation";

const Login = () => {
    const  router = useRouter();
    const { setUsername, setUserpassword, logindata, username, userpassword } = useContext(UserContext)
    const HandleSubmit = (e) => {
        e.preventDefault();
        logindata > 0 && logindata.map((users) => {
            const { email, password } = users;
            if (email === username && password === userpassword) {
                alert("Login Successfully");
                router.push('/')
            } else {
                alert('Invalid Credentials')
            }})
    }
    return (
        <>
            <form onSubmit={HandleSubmit}>
                <input type='email' placeholder="Email" onChange={(e) => setUsername(e.target.value)} value={username} /><br />
                <input type='password' placeholder="Password" onClick={(e) => setUserpassword(e.target.value)}  /><br />
                
                <button type="submit">Submit</button>
            </form>
            <Link href="/signup">Sign Up Here!</Link>
        </>
    )
}

export default Login;