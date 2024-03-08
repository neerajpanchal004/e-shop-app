"use client"
import { useStatStyles } from "@chakra-ui/react";
import { createContext, useState } from "react";
 export  const UserContext = createContext();
 
 const Contextapi = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const [userpassword, setUserpassword] = useState()
    const [isauth, setIsauth] = useState(false)
    const [logindata, setLogindata] = useState()
    const [mobile, setMobile] = useState()
    const [shoes, setShoes] = useState()

    const statedata = {
        
    }
   return (
    <UserContext.Provider  value={{
        loading,
        setLoading,
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        userpassword,
        setUserpassword,
        isauth,
        setIsauth,
        logindata,
        setLogindata,
        shoes,
        setShoes,
        mobile,
        setMobile,
    }}>
        {children}
    </UserContext.Provider>
   )
 }
 
 export default Contextapi