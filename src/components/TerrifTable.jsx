import React from 'react'
import { HOTEL_ROOM_TYPES, HOTEL_TERRIFFS } from '../constants'

export default function TerrifTable() {
    return (
        <table class="table-auto w-full font-Lora">
            <thead className='w-full border bg-secondary text-primary'>
                <tr >
                    <th className='py-2 text-xl'>Room Category</th>
                    <th className='py-2 text-xl'>Rate</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    HOTEL_ROOM_TYPES.map((room) => {
                        return (
                            <tr className='border'>
                                <td className='py-1 font-semibold border-r text-xl max-md:text-lg'>{room}</td>
                                <td className='py-1 font-semibold border-r text-xl max-md:text-lg'>{HOTEL_TERRIFFS[room]}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
