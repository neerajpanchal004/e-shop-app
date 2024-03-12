"use client"
import { useParams, } from 'next/navigation'
import React from 'react'

const Page = () => {
  // const router = useRouter()
  const {id} = useParams();
  
  return (
    <div>hyy{id}</div>
  )
}

export default Page