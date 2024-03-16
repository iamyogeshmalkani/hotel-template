import React from 'react'
import { useParams } from 'react-router-dom';
import CustomCarousel from '../components/Carousel';
import { HOTEL_ROOM_TYPES_AND_INFO } from '../constants';
import HotelAmenities from '../components/HotelAmenities';
import ClickableCategoriesSection from '../components/ClickableCategoriesSection';

export default function IndividualRoomPage() {
    const { roomType } = useParams()
    const clickHandler = (type) => {
        window.open(`${type}`, "_self")
    }
    return (
        <div className='w-full flex flex-col items-center font-Lora'>
            <ClickableCategoriesSection categories={Object.keys(HOTEL_ROOM_TYPES_AND_INFO)} activeCategory={roomType} clickHandler={clickHandler} />
            <img src='/images/roomamentitesbg.jpg' className='fixed w-full h-full object-cover top-[5rem] left-0 z-[-10]' />
            <div className='w-full flex flex-col gap-10 items-center py-10  max-md:w-[100%] bg-white'>
                <p className='text-3xl max-md:text-xl'>{roomType}</p>
                <div className='w-[70%] max-md:w-[90%]'>
                    <CustomCarousel>
                        {
                            HOTEL_ROOM_TYPES_AND_INFO[roomType].photos.map((photo) => {
                                return (
                                    <img src={`/images/room-types/${photo}.jpg`} className='w-full' />
                                )
                            }
                            )
                        }
                    </CustomCarousel>
                </div>
                <p className='w-[80%] max-md:w-[90%] text-sm max-md:text-xs text-left leading-6'>{HOTEL_ROOM_TYPES_AND_INFO[roomType].description}</p>
            </div>
            <div className='w-full flex flex-col gap-10 items-center py-20 max-md:py-10 z-10 mt-[300px] max-md:mt-[200px] bg-primary'>
                <HotelAmenities amenities={HOTEL_ROOM_TYPES_AND_INFO[roomType].amenities} heading={"Room Amenities"} />
                {/* <img src='/images/hotel-amenities.jpg' className='object-contain self-center rounded-xl w-[40%] max-md:w-[90%]'></img> */}
            </div>
        </div>
    )
}
