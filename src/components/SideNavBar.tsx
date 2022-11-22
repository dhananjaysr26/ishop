const SideNavBar: React.FC = () => {
  return (
    <div className="hidden md:flex md:w-28 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-1 min-h-0 bg-[#d2f5fa] rounded-[40px] rounded-r-none">
        <div className=" p-5">
          <img className=" cursor-pointer" src='/icons/logo.svg' alt="logo" />
        </div>
        <ul className="flex flex-col justify-around flex-1 overflow-y-auto p-6 h-full">
          <li className=' hover:bg-[#58bbfc] cursor-pointer rounded-3xl hover:shadow-2xl bg-[#58bbfc]'><img src='/icons/home.svg' className='p-5 cursor-pointer ' /></li>
          <li className=' hover:bg-[#58bbfc] cursor-pointer rounded-3xl hover:shadow-2xl '><img src='/icons/home.svg' className='p-5 cursor-pointer ' /></li>
          <li className=' hover:bg-[#58bbfc] cursor-pointer rounded-3xl hover:shadow-2xl '><img src='/icons/home.svg' className='p-5 cursor-pointer ' /></li>
          <li className=' hover:bg-[#58bbfc] cursor-pointer rounded-3xl hover:shadow-2xl '><img src='/icons/home.svg' className='p-5 cursor-pointer ' /></li>
          <li className=' hover:bg-[#58bbfc] cursor-pointer rounded-3xl hover:shadow-2xl '><img src='/icons/home.svg' className='p-5 cursor-pointer ' /></li>
        </ul>
        <div>
          <img src='/icons/logout.svg' className='p-10 cursor-pointer  rotate-180' />
        </div>
      </div>
    </div>
  )
}
export default SideNavBar