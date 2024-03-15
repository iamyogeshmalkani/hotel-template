import React, { useEffect, useState } from 'react'
import { ROOM_CATEGORIES } from '../constants'
import { getActiveImages } from '../helpers/galleryHelper'
import CustomModal from '../components/CustomModal'

export default function GalleryPage() {
    const [activeImageCategory, setActiveImageCategory] = useState("All Photos")
    const [imageForModal, setImageForModal] = useState(null);

    const closeModal = () => {
        setImageForModal(null)
    }

    return (
        <div className='w-full flex flex-col pb-20 font-Lora justify-center items-center'>
            {imageForModal && <CustomModal closeModal={closeModal}>
                <img src={`images/hotel-images/${imageForModal}.jpg`} className='w-[100%]' />
            </CustomModal>}
            <div className='w-full flex flex-row flex-wrap gap-5 justify-center bg-secondary py-10 px-5'>
                {
                    ROOM_CATEGORIES.map((category) => {
                        return (<p className={`text-primary cursor-pointer text-xl max-md:text-sm ${activeImageCategory === category ? 'underline' : ''}`} onClick={() => { setActiveImageCategory(category) }}>{category}</p>)
                    })
                }
            </div>
            <div className='w-[90%] max-md:w-[100%] flex flex-col gap-10 items-center bg-primary py-10'>
                <p className='text-3xl max-md:text-xl'>{activeImageCategory}</p>
                <div className='flex flex-row flex-wrap justify-center gap-5'>
                    {getActiveImages(activeImageCategory).map((image) => {
                        return (<img src={`images/hotel-images/${image}.jpg`} className=' cursor-pointer w-[280px] max-md:w-[200px]' onClick={() => { setImageForModal(image) }} />)
                    })}
                </div>
            </div>
        </div>
    )
}
