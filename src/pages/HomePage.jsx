import React from 'react'
import CustomCarousel from '../components/Carousel'
import HotelAmenities from '../components/HotelAmenities'
import HotelAddressAndContactSection from '../components/HotelAddressAndContactSection'
import GalleryPreview from '../components/GalleryPreview'
import FloatingButton from '../components/FloatingButton'
import { HOTEL_AMENITIES, HOTEL_PHONE1, HOTEL_ROOM_TYPES_AND_INFO } from '../constants'
import { getActiveImages } from '../helpers/galleryHelper'
import RoomsPage from "../pages/RoomsPage"
import ProductCards from '../components/ProductCards'

export default function HomePage() {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleOnChange = index => {
        setSelectedIndex(index);
    };

    const onCLickHandler = () => {
        window.open(`https://wa.me/${HOTEL_PHONE1}`, "_self")
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <img loading="lazy" alt='hotel-image' src='/images/hotelbg.jpg' className='fixed top-0 left-0 w-full h-full z-[-10] object-cover' />
            <div className='w-full mt-[-5rem]'>
                <CustomCarousel onChangeHandler={handleOnChange} >
                    {
                        getActiveImages("Rooms").map((room, ind) => {
                            return (
                                <img loading="lazy" key={room} alt={room} src={`images/hotel-images/${room}.jpg`} className={`${selectedIndex === ind ? 'zoom-in-out' : ''} w-full h-[100vh] object-cover`} />
                            )
                        })
                    }
                </CustomCarousel>
            </div>
            <HotelAddressAndContactSection />
            <div className='w-full bg-[rgba(0,0,0,0.6)] py-10 flex justify-center'>
                <ProductCards products={Object.keys(HOTEL_ROOM_TYPES_AND_INFO)} />
            </div>
            <div className="flex flex-col w-full gap-[320px] max-md:gap-[200px]">
                <div className='w-[100%] flex flex-col gap-10 items-center py-20 max-md:py-10 z-10 bg-primary'>
                    <HotelAmenities amenities={HOTEL_AMENITIES} heading={"The Advantages"} />
                </div>

                <div className='w-[100%] z-10 flex justify-center bg-primary'>
                    <GalleryPreview />
                </div>
            </div>
            <FloatingButton clickHandler={onCLickHandler} >
                <img loading="lazy" alt='whatsapp' className='w-[65px] object-cover max-md:w-[50px]' src='images/whatsapp.webp' />
            </FloatingButton>
        </div >
    )
}
