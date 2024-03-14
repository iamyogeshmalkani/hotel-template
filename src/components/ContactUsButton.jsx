import React from 'react'
import { IoMdContact } from 'react-icons/io'

export default function ContactUsButton() {
    return (
        <div className='w-[90%] justify-end flex mt-5'>
            <div className='flex flex-row gap-2 bg-secondary text-primary p-2 rounded-sm font-Lora'>
                <IoMdContact size={35} />
                <button className='text-xl max-md:text-lg'>Contact Us</button>
            </div>
        </div>
    )
}
