import React from 'react'
import Image from 'next/image'

function NavBar() {
    const clickRoute = () => {

    }

  return (
    <div className=" bg-blue-950 w-screen flex justify-end">
        <div className="max-h-10 pl-8 mr-auto">
            <Image src="/site-header-logo.png" alt="cnbc site image" className="py-2" width={150} height={150} onClick={clickRoute(1)}  style={{cursor: 'pointer'}}></Image>
        </div>

        <button className="bg-black text-white mr-2 my-3 h-9 opacity-95 flex justify-end items-center px-2 bg-opacity-25">
            <div className='px-1 font-calibri text-xs font-bold'>
                Search quotes, news, & videos
            </div>
            <Image src={"/magnifier.png"} width={23} height={23}></Image>
        </button>
        
        <button className="bg-blue-950 text-white mr-2 my-4 h-6 hover:text-orange-400" onClick={clickRoute(2)}>
            <div className='px-1 font-calibri text-xs font-bold'>
                WATCHLIST
            </div>
        </button>

        <div className="max-h-10">
            <Image src={"/small-bell.png"} className='py-4 mr-2' width={20} height={20}></Image>
        </div>

        <div className='text-white mr-2 my-5 h-6 px-1 font-calibri text-xs font-bold'>|</div>

        <button className="bg-blue-950 text-white mr-2 my-4 h-6 hover:text-orange-400" onClick={clickRoute(3)}>
            <div className='px-1 font-calibri text-xs font-bold'>
                SIGN IN
            </div>
        </button>

        <button className="bg-white text-blue-950 mr-8 my-4 h-6 hover:opacity-75" onClick={clickRoute(4)}>
            <div className='px-1 font-calibri text-xs font-bold'>
                CREATE FREE ACCOUNT
            </div>
        </button>
    </div>
  )
}

export default NavBar