import React from 'react'
import CustomButton from './CustomButton'

export default function LeftAndRightProductDescriptionSection({ children, heading, description, imageOnLeft }) {

    const clickHandler = (type) => {
        window.open(`Rooms/${heading}`, "_self")
    }

    return (
        <div className='full flex flex-row gap-5 max-md:flex-col font-Lora items-center'>
            <div className={`w-[60%] max-md:w-[100%] max-md:px-5  object-cover max-md:order-1 ${imageOnLeft ? 'order-1' : 'order-2'}`}>
                {children}
            </div>
            <div className={`w-[40%] max-md:w-[100%] max-md:order-2 px-5 flex flex-col gap-4 ${imageOnLeft ? "order-2" : "order-1"} justify-center`}>
                <p className='text-2xl max-md:text-xl font-semibold'>{heading}</p>
                <p className='max-md:text-sm'>{description}</p>
                <CustomButton text={"More Info"} onClickHandler={clickHandler} />
            </div>
        </div>
    )
}
