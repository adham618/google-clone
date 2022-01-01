import type { NextPage } from 'next'
import Head from 'next/head'
import Avater from '../common/components/Avater'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Google</title>
        <meta name="description" content="Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center"></div>
        {/* Right */}
        <div className="flex space-x-4 items-center ">
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* Icon */}
          {/* Avater */}
          <Avater url={'/photo.jpg'} />
        </div>
      </header>
      {/* Body */}
      {/* Footer */}

    </>
  )
}

export default Home
