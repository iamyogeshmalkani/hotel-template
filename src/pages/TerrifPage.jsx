import React from 'react'
import TerrifTable from '../components/TerrifTable'
import { IoMdContact } from 'react-icons/io'
import CustomButton from '../components/CustomButton'

export default function TerrifPage() {
    const onButtonClick = () => {
        window.open("/About", "_self")
    }
    return (
        <div className='py-10 flex flex-col justify-center items-center'>
            <div className='w-[60%] max-md:w-[90%]'>
                <TerrifTable />
            </div>
            <CustomButton text={"Contact Us"} icon={<IoMdContact size={35} />} onClickHandler={onButtonClick} />
        </div>
    )
}
