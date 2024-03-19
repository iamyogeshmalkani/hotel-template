import React from 'react'
import ProductCard from './ProductCard'
import { HOTEL_ROOM_TYPES_AND_INFO } from '../constants'

export default function ProductCards({ products }) {

    const clickHandler = (type) => {
        window.open(`Rooms/${type}`, "_self")
    }

    return (
        <div className='flex flex-row flex-wrap justify-center items-center  gap-5 w-[90%]'>
            {
                products.map((type, ind) => {
                    return (
                        <div key={ind} className='w-[25rem]'> <ProductCard clickHandler={() => clickHandler(type)} heading={type} description={HOTEL_ROOM_TYPES_AND_INFO[type].description} imageLocation={"images/room-types/" + HOTEL_ROOM_TYPES_AND_INFO[type].photos[0] + ".jpg"} />
                        </div>
                    )
                })
            }
        </div>
    )
}
