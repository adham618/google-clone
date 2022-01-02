import { ReactElement, SVGProps } from "react"

interface HeaderOptionProps {
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement<any, any>
  title: string
  selected: boolean
}

const HeaderOption = ({ Icon, title, selected }: HeaderOptionProps) => {
  return (
    <div
      onClick={() => !selected}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer
      ${selected && "text-blue-500 border-blue-500"}`}>
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  )
}
export default HeaderOption