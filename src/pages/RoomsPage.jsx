import React, { useState } from 'react'
import { HOTEL_NAME, HOTEL_ROOM_TYPES_AND_INFO } from '../constants'
import ProductCard from '../components/ProductCard'
import ClickableCategoriesSection from '../components/ClickableCategoriesSection'
import LeftAndRightProductDescriptionSection from '../components/LeftAndRightProductDescriptionSection'
import CustomCarousel from '../components/Carousel'

export default function RoomsPage() {

    const clickHandler = (type) => {
        window.open(`Rooms/${type}`, "_self")
    }


    return (
        <div className='py-20 flex flex-col justify-center items-center gap-10 font-Lora '>
            <p className='text-3xl max-md:text-xl'>Rooms at the {HOTEL_NAME}</p>
            <div className='flex flex-col max-md:gap-10 w-full'>
                {Object.keys(HOTEL_ROOM_TYPES_AND_INFO).map((type, ind) => {
                    return (
                        <LeftAndRightProductDescriptionSection imageOnLeft={(ind % 2) == 0} description={HOTEL_ROOM_TYPES_AND_INFO[type].description} heading={type}>
                            <img className='w-full h-[500px] max-md:h-[400px] object-cover' src={"images/room-types/" + HOTEL_ROOM_TYPES_AND_INFO[type].photos[0] + ".jpg"} />
                            {/* <CustomCarousel>
                                {
                                    HOTEL_ROOM_TYPES_AND_INFO[type].photos.map((photo) => {
                                        return (
                                            <img loading="lazy" key={photo} alt={photo} src={`/images/room-types/${photo}.jpg`} className='w-full h-[500px] object-cover' />
                                        )
                                    }
                                    )
                                }
                            </CustomCarousel> */}
                        </LeftAndRightProductDescriptionSection>
                    )
                })}

            </div>
        </div>
    )
}

