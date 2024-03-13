import React, { useEffect, useState } from 'react'
import { NAVBARPAGES } from '../constants'
import { getDeviceSize } from '../utils/utils'
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
    const [currentDevice, setCurrentDevice] = useState(getDeviceSize())
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setCurrentDevice(getDeviceSize());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='sticky top-0'>
            <div className='flex flex-row justify-between gap-16 items-center px-10 h-20 bg-[rgba(255,255,255,.5)] shadow-lg'>
                <img src='Logo.webp' className='h-14' />
                {(currentDevice === "large" || currentDevice === "extra-large") ? <div className='flex flex-row gap-7'>
                    {
                        NAVBARPAGES.map((page) => {
                            return (
                                < p className='text-text text-lg font-Lora font-bold cursor-pointer' > {page}</p>
                            )
                        })
                    }
                </div> :
                    <CiMenuBurger
                        size={25}
                        onClick={() => { setOpenMenu(!openMenu) }}
                    />
                }

            </div>
            {(currentDevice !== "large" && currentDevice !== "extra-large") && openMenu &&
                <div className='fixed right-0 flex flex-col gap-4 py-2  w-[50vw] h-[100vh] shadow-lg bg-[rgba(0,0,0,.5)]'>
                    {
                        NAVBARPAGES.map((page) => {
                            return (
                                <p className='opacity-1 text-text text-lg font-Lora font-bold cursor-pointer w-full border-b px-2' > {page}</p>
                            )
                        })
                    }
                </div>}
        </div >
    )
}
