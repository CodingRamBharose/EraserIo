'use client'
import { useMutation } from 'convex/react';
import Image from 'next/image'
import React, { useState } from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { api } from '../../../../../convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const CreateTeam = () => {


  const [teamName,setTeamName] = useState("")
  const {user}:any = useKindeBrowserClient();
  const router = useRouter()

  const createTeam = useMutation(api.teams.createTeam)

  const createNewTeam=()=>{
    createTeam({
      teamName : teamName,
      createdBy: user?.email
    }).then(res=>{
      console.log(res)
      if(res){
        router.push('/dashboard')
        toast('Team Created Succesfully....');
      }
    })
  }


  return (
    <div className='p-6 md:p-10 bg-zinc-900 h-screen w-full'>
      <div className='flex items-center gap-1'>
      <Image src='/logo-1.png' height={50} width={50} alt='logo'></Image>
      <p className='text-white text-2xl font-bold'>eraser</p>
      </div>
        
      <div className='flex flex-col items-center mt-20 gap-6 md:gap-10'>
        
        <div className='bg-green-900 flex items-center gap-2 text-green-300 w-fit px-3 rounded-md border-t-2 border-green-300'>
          <FaUserGroup/>
        <h3>Team Name</h3>
        </div>
        <h3 className='text-white text-[5vw] md:text-[3vw] font-bold'>What should we call your team?</h3>
        <h4 className='text-gray-500 text-[3vw] md:text-[1.5vw]'>You can always change this later from settings.</h4>
        <div className='flex flex-col gap-1'>
          <p className='text-white'>Team Name</p>
          <div className='bg-zinc-800 px-2 py-3 w-[80vw] md:w-[35vw] border border-gray-500 rounded-sm'>
          <input onChange={(e)=>setTeamName(e.target.value)} value={teamName} className='bg-transparent w-full outline-none text-white px-4' type="text" placeholder='Team Name' />
          </div>
        </div>
        <div>
        <button className='text-white bg-blue-600 rounded-sm px-[20vw] md:px-28 py-3 cursor-pointer hover:bg-blue-700' disabled = {!(teamName && teamName?.length>0)} onClick={()=>createNewTeam()}>Continue</button>
        <p className='text-gray-500 text-center mt-2'>1 of 5</p>
        </div>
      </div>
    </div>
  )
}

export default CreateTeam
