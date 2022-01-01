import type { NextPage } from 'next'
import Head from 'next/head'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import Avater from '../common/components/Avater/Avater'
import Image from 'next/image'
import Footer from '../common/components/Footer/Footer'
import { useRouter } from 'next/router'
import { MutableRefObject, useRef } from 'react'

const Home: NextPage = () => {
  const router = useRouter()

  const searchInputRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>

  const search = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Head>
        <title>Google</title>
        <meta name="description" content="Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center ">
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
          {/* Avater */}
          <Avater url={'/photo.jpg'} />
        </div>
      </header>
      {/* Body */}
      <form className='flex flex-col items-center mt-5 flex-grow mx-5 w-4/5'>
        <Image
          src={"https://www.google.com/logos/doodles/2022/new-years-day-2022-6753651837109338-law.gif"}
          width={500}
          height={200}
          alt="google-image"
          draggable="false"
        />
        <div className='flex w-full mt-5 hover:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input ref={searchInputRef} type="text" name="" id="" className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-6 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I&apos;m Feeling  Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
