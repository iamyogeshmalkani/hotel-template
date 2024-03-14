import React from 'react'
import TerrifTable from '../components/TerrifTable'
import ContactUsButton from '../components/ContactUsButton'

export default function TerrifPage() {
    return (
        <div className='py-10 flex flex-col justify-center items-center'>
            <div className='w-[60%] max-md:w-[90%]'>
                <TerrifTable />
            </div>
            <ContactUsButton />
        </div>
    )
}
