import React from 'react'

export default function DesignBySection() {
    return (
        <div className='font-Lora w-full py-2 text-secondary bg-white'>
            <p className='max-md:text-sm'>Designed and Maintained by <span className='font-bold cursor-pointer' onClick={() => { window.open('https://www.linkedin.com/in/yogesh-malkani', "blank") }}>Yogesh</span> All rights reserved.</p>
        </div>
    )
}
