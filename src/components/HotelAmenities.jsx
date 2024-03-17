import React from 'react'
import { getLogoByText } from '../utils/utils'

export default function HotelAmenities({ heading, amenities }) {
    return (
        <div className='flex flex-col font-Lora flex-wrap w-[80%] max-md:w-[90%]'>
            <p className=' text-3xl max-md:text-xl '>{heading}</p>
            <div className='flex flex-row flex-wrap mt-5 max-w-full justify-center max-md:flex-row '>
                {
                    amenities.map((am) => {
                        return (
                            <div key={am} className='flex flex-col gap-3 max-md:gap-2 mt-10 justify-center items-center w-[200px] max-md:w-[160px]'>
                                <img loading="lazy" alt={am} src={`/icons/${getLogoByText(am)}.svg`} className='w-8 text-secondary font-semibold' />
                                <p className='max-md:text-sm'>{am}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
