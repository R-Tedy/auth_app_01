import AuthForm from '@/components/AuthForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col w-full lg:flex-row'>
      <div className='w-7/12 h-screen hidden lg:block'>
        <Image
          src='/log_001.jpg'
          alt='log in image'
          width={250}
          height={150}
          className=' w-full object-cover object-center h-full rounded-br-[100px]'
        />
      </div>
      <div className='flex justify-center items-center min-h-screen'>
        <AuthForm/>
      </div>
    </section>
  )
}

export default page