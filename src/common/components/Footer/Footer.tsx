interface FooterProps {

}

const Footer = ({ }: FooterProps) => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-2 sm:px-8 py-3">
        <p>United Kingdom</p>
      </div>
      <div className="lg:flex lg:justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="link">Advertisiny</p>
          <p className="link">Business</p>
          <p className="link">How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 md:justify-self-end lg:justify-self-end">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer