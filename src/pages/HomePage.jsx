import React from 'react'
import CustomCarousel from '../components/Carousel'
import HotelAmenities from '../components/HotelAmenities'
import HotelAddressAndContactSection from '../components/HotelAddressAndContactSection'
import GalleryPreview from '../components/GalleryPreview'

export default function HomePage() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[100%]'>
                <CustomCarousel />
            </div>
            <HotelAddressAndContactSection />
            <div className='w-[100%] bg-primary'>
                <HotelAmenities />
            </div>
            <div className='w-[100%] flex justify-center'>
                <GalleryPreview />
            </div>
        </div>
    )
}
