"use client"
import Image from 'next/image'
import Nav from '@/app/components/Nav'
import { useSelector } from 'react-redux'

export default function Home() {

  return (
    <div className='h-screen'>
      
      {/* <Mainnav/> */}
      <Nav></Nav>
      <div className='h-[90%]'>
        {/* <Image className='' src="/bg2.jpg" height={600} width={600} ></Image> */}
        <h1 className=' text-5xl text-gray-800 font-medium text-center pt-20 leading-[70px]'>Find & Hire  <Image className=' inline-block pb-2' src={"/mainhearotagline.png"} height={70} width={70} /> <br />Experts for Any Job and Internship</h1>
        <h3 className='text-xl text-gray-500 text-center mt-3'>Connecting students to job opportunities and helping employers find experts for any role</h3>
        <Image className='m-auto pt-4' src={"/mainbg.png"} height={520} width={520} />
      </div>
      <h1>
      </h1>
      {/* <h1>{student}</h1> */}
    </div>
  )
}
