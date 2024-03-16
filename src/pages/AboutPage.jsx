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
        <div className='flex flex-col gap-10 justify-center items-center  py-10'>

            <div className='w-[80%] flex flex-col items-center gap-5'>
                <p className='font-Lora text-3xl max-md:text-xl'>About {HOTEL_NAME}</p>
                <p className='max-md:text-sm'>{ABOUT_US_DESCRIPTION}</p>
                <div className='w-[70%] max-md:w-full z-0'>
                    <CustomCarousel >
                        {
                            getActiveImages("Rooms").map((room) => {
                                return (
                                    <div>
                                        <img src={`images/hotel-images/${room}.jpg`} className='w-full h-[600px] object-cover ' />
                                    </div>
                                )
                            })
                        }
                    </CustomCarousel>
                </div>
            </div>
            <div className=' flex flex-col gap-10 py-20 max-md:py-10 items-center w-full bg-primary'>
                <HotelAmenities amenities={HOTEL_AMENITIES} heading={"Amenities Tailored for Your Convenience"} />
                <img src='/images/hotel-amenities.jpg' className='object-contain self-center rounded-xl w-[40%] max-md:w-[90%]'></img>
            </div>
            <CustomButton text={"Contact Us"} icon={<IoMdContact size={35} />} onClickHandler={onButtonClick} />
        </div>
    )
}
