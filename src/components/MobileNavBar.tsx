const MobileNavigationBar: React.FC = () => {
    return (
        <ul className=" fixed bottom-1 flex md:hidden h-20 flex-row items-center justify-around w-full rounded-[40px] px-2 bg-[#b2d3ea]">
            <li
                className='rounded-lg  bg-[#58bbfc] p-2 items-center justify-center flex'>
              <img
                    src='/icons/home.svg'
                    className='h-5 '
                />
            </li>
            <li
                className='rounded-lg  p-2 items-center justify-center flex '>
                <img src='/icons/home.svg'
                    className='h-5 ' />
            </li>
            <li
                className='rounded-lg  p-2 items-center justify-center flex '>
                <img src='/icons/home.svg' className='h-5 ' />
            </li>
            <li
                className='rounded-lg  p-2 items-center justify-center flex '>
                <img src='/icons/home.svg' className='h-5 ' />
            </li>
            <li className='rounded-lg  p-2 items-center justify-center flex '>
                <img src='/icons/home.svg' className='h-5 ' />
            </li>
        </ul>
    )
}
export default MobileNavigationBar