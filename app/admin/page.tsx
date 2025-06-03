'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <>
      <Button onClick={() => {
        alert('Hello Admin, you are officially checked in. Enjoy your time with the system.')
      }} size='lg'>
        Check-in
      </Button>
    </>
  )
}

export default page