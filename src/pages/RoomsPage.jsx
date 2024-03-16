import React, { useState } from 'react'
import { HOTEL_NAME, HOTEL_ROOM_TYPES_AND_INFO } from '../constants'
import ProductCard from '../components/ProductCard'
import ClickableCategoriesSection from '../components/ClickableCategoriesSection'

export default function RoomsPage() {

    const clickHandler = (type) => {
        window.open(`Rooms/${type}`, "_self")
    }

    return (
        <div className='py-20 flex flex-col justify-center items-center gap-10 font-Lora '>
            <p className='text-3xl max-md:text-xl'>Rooms at the {HOTEL_NAME}</p>
            <div className='flex flex-row flex-wrap justify-center items-center  gap-5 w-[90%]'>
                {
                    Object.keys(HOTEL_ROOM_TYPES_AND_INFO).map((type, ind) => {
                        return (
                            <div key={ind} className='w-[25rem]'> <ProductCard clickHandler={() => clickHandler(type)} heading={type} description={HOTEL_ROOM_TYPES_AND_INFO[type].description} imageLocation={"images/room-types/" + HOTEL_ROOM_TYPES_AND_INFO[type].photos[0] + ".jpg"} />
                            </div>)
                    })
                }
            </div>
        </div>
    )
}
