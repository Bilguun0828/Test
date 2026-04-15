
const BottomFooter = () => {
  return (
    <nav className="bg-[#020617] text-white">
  <div className="max-w-6xl mx-auto px-4 py-4">
    
    {/* <!-- Medium and up --> */}
    <div className="hidden md:flex justify-between items-center">
      <h1 className="text-green-400 font-bold text-lg">FitZone</h1>

      <div className="flex space-x-6 text-sm">
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Classes</a>
        <a href="#" className="hover:text-gray-300">Membership</a>
        <a href="#" className="hover:text-gray-300">Support</a>
      </div>
    </div>

    {/* <!-- Small device --> */}
    <div className="md:hidden text-center">
      <h1 className="text-green-400 font-bold text-lg mb-2">FitZone</h1>

      <div className="flex justify-center space-x-4 text-sm">
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">ClassclassNamees</a>
        <a href="#" className="hover:text-gray-300">Membership</a>
        <a href="#" className="hover:text-gray-300">Support</a>
      </div>
    </div>

  </div>
</nav>
  )
}

export default BottomFooter