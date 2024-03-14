import React from 'react'
import { HOTEL_ADDRESS, HOTEL_MAIL1, HOTEL_PHONE1, HOTEL_PHONE2 } from '../constants'
import { IoIosMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'

export default function HotelAddressAndContactSection() {
    return (
        <div className=' font-Lora w-full flex flex-col gap-5 bg-secondary py-5 text-primary'>
            <p className='max-md:text-sm'>{HOTEL_ADDRESS}</p>
            <div className='flex flex-row justify-center flex-wrap gap-4 text-sm'>
                <div className='flex flex-row gap-2 items-center'>
                    <IoIosMail className=' text-lg' />
                    <p className='max-md:text-xs'>{HOTEL_MAIL1}</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <FaPhoneAlt className=' text-lg' />
                    <p className='max-md:text-xs'>{HOTEL_PHONE1} | {HOTEL_PHONE2}</p>
                </div>
            </div>

        </div>
    )
}
