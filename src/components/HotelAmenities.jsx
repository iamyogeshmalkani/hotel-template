import React from 'react'
import { HOTEL_AMENITIES } from '../constants'

export default function HotelAmenities({ heading, amenities }) {
    return (
        <div className='flex flex-col gap-4 flex-wrap w-[80%] max-md:w-[90%]'>
            {/* <img src='/images/hotelamenitiesbg.jpg' className='w-full' /> */}
            <p className='font-Lora text-2xl max-md:text-xl '>{heading}</p>
            <div className='flex flex-row flex-wrap max-w-full justify-start max-md:flex-row gap-4 '>
                {
                    amenities.map((am) => {
                        return (
                            <div className='flex flex-row gap-3 max-md:gap-2 justify-center items-center'>
                                <div className='h-2 w-2 max-md:h-1 max-md:w-1 rounded-[50%] bg-black'></div>
                                <p className='max-md:text-sm text-secondary font-semibold'>{am}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
