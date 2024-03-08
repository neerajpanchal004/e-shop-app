"use client"
import axios from "axios"
import  { useContext, useState} from 'react'
import { UserContext } from "../context/Contextapi";


// POST REQUEST

export async function  postUsers(data){
    try {
        let response = await axios.post(api + "/authdata", data);
    } catch (error) {
       console.log(error) 
    }
}

// POST REQUEST

// GET REQUEST

export async function  getUsers(){
    // const {setLogindata} = useContext(UserContext)

    try {
        let response = await axios.get(api + "/authdata");
         setLogindata(response.data)
    } catch (error) {
       console.log(error) 
    }
}

// GET REQUEST FOR SHOES


export async function  getShoesdata(){

    try {
        let response = await axios.get(api + "/shoes");
         setShoes(response.data)
    } catch (error) {
       console.log(error) 
    }
}


// GET REQUEST FOR MOBILES


export function Fetchmobile(){
    // const {setMobile} = useContext(UserContext)


    async function  getMobiledata(){

        try {
            let response = await axios.get(api + "/mobile");
             setMobile(response.data)
        } catch (error) {
           console.log(error) 
        }
    }
    return getMobiledata;

}


export async function getData(apipoint, data){

    try {
        let response = await axios.get(apipoint);
         data(response.data)
    } catch (error) {
       console.log(error) 
    }
}




