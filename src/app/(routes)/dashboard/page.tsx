"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation, useQuery } from 'convex/react'
import React, { useEffect } from 'react'
import { api } from '../../../../convex/_generated/api'

const page = () => {

  const convex = useConvex()
  const {user}:any = useKindeBrowserClient();

  // const getUser = useQuery(api.user.getUser,{email:user?.email});
  const createUser = useMutation(api.user.createUser)

  useEffect(()=>{
    if(user){
      checkUser()
    }
  },[user])

  const checkUser = async ()=>{
    const result = await convex.query(api.user.getUser,{email:user?.email});
    if(!result?.length){
      createUser({
        name: user.given_name,
        email: user.email,
        image: user.picture
      }).then((res)=>{
        console.log(res)
      })
    }
  }

  return (
    <div className='bg-zinc-800 text-white h-screen py-8'>
      <LogoutLink>logout</LogoutLink>
    </div>
  )
}

export default page
