import React from 'react'
import { HOTEL_AMENITIES } from '../constants'
import { FaWifi } from 'react-icons/fa'

export default function HotelAmenities() {
    return (
        <div className='flex flex-row m-auto max-md:flex-col py-10 w-[90%]  justify-center gap-20 mt-5'>
            <div className='flex flex-col  gap-4 flex-wrap '>
                <p className='font-Lora text-2xl max-md:text-xl underline'>Amenities Tailored for Your Convenience</p>
                <div className='flex flex-col flex-wrap max-w-full items-start max-md:flex-row gap-4 '>
                    {
                        HOTEL_AMENITIES.map((am) => {
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
            <img src='images/hotel-amenities.jpg' className='object-contain rounded-xl w-[40%] max-md:w-[90%]'></img>
        </div>
    )
}
