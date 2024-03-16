import React from 'react'
import { getActiveImages } from '../helpers/galleryHelper'
import CustomButton from './CustomButton'
import { IoMdImages } from 'react-icons/io'

export default function GalleryPreview() {

    const onButtonClick = () => {
        window.open("/Gallery", "_self")
    }
    return (
        <div className='w-[90%] flex flex-col gap-10  py-10 self-center font-Lora'>
            <p className='text-3xl max-md:text-xl underline'>Gallery</p>
            <div className='flex flex-row flex-wrap justify-center gap-5'>
                {getActiveImages("Rooms").map((image) => {
                    return (<img src={`images/hotel-images/${image}.jpg`} className=' cursor-pointer w-[280px] max-md:w-[200px]' />)
                })}
            </div>
            <div className='w-full flex justify-end'>
                <CustomButton text={"Browse Gallery"} icon={<IoMdImages size={35} />} onClickHandler={onButtonClick} />
            </div>
        </div>
    )
}
