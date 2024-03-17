import React from 'react'
import { ABOUT_US_DESCRIPTION, HOTEL_AMENITIES, HOTEL_NAME } from '../constants'
import HotelAmenities from '../components/HotelAmenities'
import CustomCarousel from '../components/Carousel';
import CustomButton from '../components/CustomButton';
import { IoMdContact } from 'react-icons/io';
import { getActiveImages } from '../helpers/galleryHelper';


export default function AboutPage() {
    const onButtonClick = () => {
        window.open("/About", "_self")
    }
    return (
        <div className='flex flex-col gap-10 justify-center items-center py-10'>

            <div className='w-[90%] flex flex-row max-md:flex-col justify-center items-start gap-10'>
                <div className='w-[50%] max-md:w-[90%] flex flex-col gap-14 items-start'>
                    <p className='font-Lora text-3xl max-md:text-xl text-tertiary'>About {HOTEL_NAME}</p>
                    <p className='max-md:text-sm text-left text-gray-500'>{ABOUT_US_DESCRIPTION}</p>
                </div>
                <div className='w-[50%] max-md:w-[90%] max-md:w-full z-0'>
                    <CustomCarousel >
                        {
                            getActiveImages("Rooms").map((room) => {
                                return (
                                    <div>
                                        <img src={`images/hotel-images/${room}.jpg`} className='w-full h-[500px] max-md:h-[400px] object-cover rounded-xl ' />
                                    </div>
                                )
                            })
                        }
                    </CustomCarousel>
                </div>
            </div>
            <div className=' flex flex-col gap-10 py-20 max-md:py-10 items-center w-full bg-primary'>
                <HotelAmenities amenities={HOTEL_AMENITIES} heading={"Amenities With Room"} />
                {/* <img src='/images/hotel-amenities.jpg' className='object-contain self-center rounded-xl w-[40%] max-md:w-[90%]'></img> */}
            </div>
            <CustomButton text={"Contact Us"} icon={<IoMdContact size={35} />} onClickHandler={onButtonClick} />
        </div>
    )
}
