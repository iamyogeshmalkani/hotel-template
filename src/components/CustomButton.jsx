import React from 'react'

export default function CustomButton({ text, icon, onClickHandler }) {
    return (
        <div className='w-[90%] justify-end flex mt-5' onClick={onClickHandler}>
            <div className='flex flex-row gap-2 bg-secondary text-primary p-2 rounded-sm font-Lora'>
                {icon}
                <button className='text-xl max-md:text-lg'>{text}</button>
            </div>
        </div>
    )
}
