// import { useParams } from "next/navigation";
// import { NextResponse } from "next/server";
// import { Menwear } from "../../data";

// export function Get(req){
//     const {id}= useParams()
//     return NextResponse.json(Menwear.id)
// }


import { NextResponse } from "next/server"
import { Menwear } from "../../data"
import {useRouter } from "next/navigation"




export function GET (req,{params}) {

    // const router = useRouter()
    const { id } = params;
    const menwear = Menwear.find((m) => m.id === parseInt(id))

    // const { id  = params;
    // console.log(id)
    // console.log(id)
    // return NextResponse.json(Menwear.find(m => m.id === parseInt(id)))
    
    return NextResponse.json(menwear)
}
