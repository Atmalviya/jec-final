'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
    const onSubmit = () => {
      signOut()
    }
  return (
    <div>
        <Button varient='outline' onClick={onSubmit} type='submit' className='flex gap-2' >  Sign Out {" "} <LogOut/></Button>
    </div>
  )
}

export default LogoutButton