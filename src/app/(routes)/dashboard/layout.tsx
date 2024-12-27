"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { api } from '../../../../convex/_generated/api';
import Sidebar from './_components/Sidebar';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const convex = useConvex()
  const { user }: any = useKindeBrowserClient();
  const router = useRouter()

  useEffect(() => {
    user && checkTeam();
  }, [user])

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, { email: user?.email });

    if (!result?.length) {
      router.push('teams/create')
    }
  }

  return (
    <div className='bg-zinc-800'>
      <div className='grid grid-cols-4'>
        <div>
          <Sidebar />
        </div>
        <div className='grid-col-3'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
