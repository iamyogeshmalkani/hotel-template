import React from 'react'

export default function ProductCard({ clickHandler, imageLocation, heading, description }) {
    return (
        <div className='w-full flex flex-col font-Lora ' onClick={clickHandler} >
            <img src={imageLocation} className='w-full object-cover hover:opacity-50 cursor-pointer' />
            <div className='w-full flex flex-col items-center gap-5 py-5 bg-primary '>
                <p className='w-[90%] text-xl max-md:text-lg text-tertiary font-semibold cursor-pointer'>{heading}</p>
                <p className='w-[90%] text-sm max-md:text-xs'>{description}</p>
            </div>
        </div>
    )
}
