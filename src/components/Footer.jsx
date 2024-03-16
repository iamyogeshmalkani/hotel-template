import React from 'react'
import { HOTEL_ADDRESS, HOTEL_MAIL1, HOTEL_NAME, HOTEL_PHONE1, HOTEL_PHONE2, NAVBARPAGES } from '../constants'
import { IoIosMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import DesignBySection from './DesignBySection'

export default function Footer() {
    return (
        <footer className=' font-Lora flex flex-col gap-10 pt-10 justify-center items-center w-full font-normal bg-secondary text-primary'>
            <div className='flex flex-col gap-2 justify-center items-center max-w-[80%] '>
                <p className='max-md:text-md'>{HOTEL_NAME}</p>
                <p className='max-md:text-md'>{HOTEL_ADDRESS}</p>
            </div>
            <div className='flex flex-row justify-center flex-wrap gap-4 text-sm'>
                <div className='flex flex-row gap-2 items-center'>
                    <IoIosMail className=' text-lg' />
                    <p className='max-md:text-sm'>{HOTEL_MAIL1}</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <FaPhoneAlt className=' text-lg' />
                    <p className='max-md:text-sm'>{HOTEL_PHONE1} | {HOTEL_PHONE2}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <p>Get in touch</p>
                <div className='flex flex-row gap-4'>
                    <FaFacebook className="text-3xl max-md:text-xl cursor-pointer" />
                    <FaWhatsapp className="text-3xl max-md:text-xl cursor-pointer" />
                    <FaInstagram className="text-3xl max-md:text-xl cursor-pointer" />
                </div>

            </div>
            <div className='flex flex-col gap-4 w-full items-center'>
                <hr className='w-[80%]' />
                <div className='flex flex-row gap-4'>
                    {NAVBARPAGES.map((page) => {
                        return (
                            <p onClick={() => { window.open(page, "_self") }} className='max-md:text-sm'>{page}</p>
                        )
                    })}
                </div>
            </div>
            <DesignBySection />
        </footer>
    )
}
