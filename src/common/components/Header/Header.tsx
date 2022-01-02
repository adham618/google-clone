import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import { MutableRefObject, useRef } from "react"
import Avater from "../Avater/Avater"
import HeaderOptions from "./HeaderOptions"

interface HeaderProps {

}

const Header = ({ }: HeaderProps) => {
  const router = useRouter()
  const searchInputRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>
  const search = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push('/')}
          className="cursor-pointer"
          src={"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"}
          width={120}
          height={40}
          alt="google-logo"
          draggable="false" />
        <form onSubmit={search} className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none" />
          <XIcon onClick={() => searchInputRef.current.value = ""} className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 cursor-pointer border-l-2 pl-4 border-gray-300" />
          <SearchIcon onClick={search} className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
        </form>
        <Avater className="ml-auto" url={'/photo.jpg'} />
      </div>
      {/* Header Options */}
      <HeaderOptions />
    </header>
  )
}
export default Header