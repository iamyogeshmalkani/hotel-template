import React from 'react'
import CustomCarousel from '../components/Carousel'
import HotelAmenities from '../components/HotelAmenities'
import HotelAddressAndContactSection from '../components/HotelAddressAndContactSection'
import GalleryPreview from '../components/GalleryPreview'
import FloatingButton from '../components/FloatingButton'
import { HOTEL_AMENITIES, HOTEL_PHONE1 } from '../constants'
import { getActiveImages } from '../helpers/galleryHelper'

export default function HomePage() {

    const onCLickHandler = () => {
        window.open(`https://wa.me/${HOTEL_PHONE1}`, "_self")
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[100%] mt-[-5rem]'>
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
            <HotelAddressAndContactSection />
            <div className="flex flex-col w-full gap-[320px] max-md:gap-[200px]">
                <img src='/images/hotelbg.jpg' className='fixed top-0 left-0 w-full h-full z-[-10] object-cover' />
                <div className='w-[100%] flex flex-col gap-10 items-center py-20 max-md:py-10 z-10 bg-primary'>
                    <HotelAmenities amenities={HOTEL_AMENITIES} heading={"Amenities Tailored for Your Convenience"} />
                    <img src='/images/hotel-amenities.jpg' className='object-contain self-center rounded-xl w-[40%] max-md:w-[90%]'></img>
                </div>
                {/* <div className='w-full z-0 absolute'>
                <img src='images/hotelbg.jpg' className='w-full' />
            </div> */}
                <div className='w-[100%] z-10 flex justify-center bg-primary'>
                    <GalleryPreview />
                </div>
            </div>
            <FloatingButton clickHandler={onCLickHandler} >
                <img className='w-[65px] object-cover' src='images/whatsapp.webp' />
            </FloatingButton>
        </div >
    )
}
