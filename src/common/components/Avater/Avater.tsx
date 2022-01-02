import Image from "next/image"

interface AvaterProps {
  url: string,
  className: string
}

const Avater = ({ url, className }: AvaterProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 hover:rounded-[50%]" ${className} `}
      src={url}
      width={35}
      height={35}
      alt="profile-pic"
      draggable="false"
    />
  )
}
export default Avater