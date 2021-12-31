import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Google</title>
        <meta name="description" content="Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="w-full p-5 text-sm text-gray-700">
        <div className="flex space-x-4 link float-right">
          <p>Gmail</p>
          <p>Images</p>
        </div>
      </header>
      {/* Icon */}
      {/* Avater */}
      {/* Body */}
      {/* Footer */}

    </>
  )
}

export default Home
