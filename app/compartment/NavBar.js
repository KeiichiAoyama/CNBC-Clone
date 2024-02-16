"use client"

import React, { useState } from 'react'
import Image from 'next/image'

function NavBar() {
    const [backgroundColor, setBackgroundColor] = useState('bg-white')

    const clickRoute = () => {}

    const menuHovered = (set) => {
        if(set){
            setBackgroundColor('bg-orange-400');
        } else {
            setBackgroundColor('bg-white');
        }
    }

  return (
    <div className=" bg-blue-950 w-screen min-h-[90px]">
        <div className='flex justify-end'>
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

        <div className='flex items-center'>
            <div class="flex flex-col justify-between w-[15px] h-[13px] ml-8 origin-center overflow-hidden"
                onMouseEnter={() => menuHovered(true)}
                onMouseLeave={() => menuHovered(false)}
            >
                <div className={`bg-white h-[2px] w-7 ${backgroundColor}`}></div>
                <div className={`bg-white h-[2px] w-7 ${backgroundColor}`}></div>
                <div className={`bg-white h-[2px] w-7 ${backgroundColor}`}></div>
            </div>

            <button className="text-white ml-4" onClick={clickRoute(3)}>
                <div className='px-1 font-calibri text-sm font-bold'>
                    MARKETS
                </div>
            </button>

            <button className="text-white ml-4" onClick={clickRoute(3)}>
                <div className='px-1 font-calibri text-sm font-bold'>
                    BUSINESS
                </div>
            </button>

            <button className="text-white ml-4" onClick={clickRoute(3)}>
                <div className='px-1 font-calibri text-sm font-bold'>
                    INVESTING
                </div>
            </button>

            <button className="text-white ml-4" onClick={clickRoute(3)}>
                <div className='px-1 font-calibri text-sm font-bold'>
                    TECH
                </div>
            </button>

            <button className="text-white ml-4" onClick={clickRoute(3)}>
                <div className='px-1 font-calibri text-sm font-bold'>
                    POLITICS
                </div>
            </button>

            <button className="text-white ml-4" onClick={clickRoute(3)}>
                <div className='px-1 font-calibri text-sm font-bold'>
                    CNBC TV
                </div>
            </button>

            <button className="text-white ml-4 flex" onClick={clickRoute(3)}>
                <div className='px-1 font-calibri text-sm font-bold'>
                    INVESTING CLUB
                </div>
                <Image src={"/locked.png"} width={15} height={12} className='ml-1'></Image>
            </button>

            <button className="text-white ml-4 flex" onClick={clickRoute(3)}>
                <div className='px-1 font-calibri text-sm font-bold'>
                    PRO
                </div>
                <Image src={"/locked.png"} width={15} height={12} className='ml-1'></Image>
            </button>

            <div className='ml-auto justify-end flex'>
                <button className="text-white mr-5" onClick={clickRoute(3)}>
                    <div className='px-1 font-calibri text-xs opacity-90'>
                        MAKE IT
                    </div>
                </button>

                <button className="text-white mr-16" onClick={clickRoute(3)}>
                    <div className='px-1 font-calibri text-xs opacity-90'>
                        SELECT
                    </div>
                </button>

                <button className="text-white" onClick={clickRoute(3)}>
                    <div className='px-1 font-calibri text-xs opacity-90'>
                        USA
                    </div>
                </button>

                <div className='text-white px-1 font-calibri text-xs font-bold'>.</div>

                <button className="text-white mr-32" onClick={clickRoute(3)}>
                    <div className='px-1 font-calibri text-xs opacity-90'>
                        INTL
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar