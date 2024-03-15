import React from 'react'
import { ABOUT_US_DESCRIPTION, HOTEL_NAME } from '../constants'
import HotelAmenities from '../components/HotelAmenities'
import CustomCarousel from '../components/Carousel';
import CustomButton from '../components/CustomButton';
import { IoMdContact } from 'react-icons/io';


export default function AboutPage() {
    const onButtonClick = () => {
        window.open("/About")
    }
    return (
        <div className='flex flex-col gap-10 justify-center items-center  py-10'>

            <div className='w-[80%] flex flex-col items-center gap-5'>
                <p className='font-Lora text-3xl max-md:text-xl'>About {HOTEL_NAME}</p>
                <p className='max-md:text-sm'>{ABOUT_US_DESCRIPTION}</p>
                <div className='w-[70%] max-md:w-full z-0'>
                    <CustomCarousel />
                </div>
            </div>
            <div className='w-[100%] bg-primary'>
                <HotelAmenities />
            </div>
            <CustomButton text={"Contact Us"} icon={<IoMdContact size={35} />} onClickHandler={onButtonClick} />
        </div>
    )
}
