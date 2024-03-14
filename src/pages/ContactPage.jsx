import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HOTEL_ADDRESS, HOTEL_MAIL1, HOTEL_NAME, HOTEL_PHONE1, HOTEL_PHONE2 } from '../constants';




const ContactPage = () => {
    return (
        <div className="flex flex-col gap-6 py-10 justify-center items-center font-Lora max-md:flex-col w-full bg-pagebg">
            <div className='flex flex-row max-md:flex-col justify-center items-center gap-10 w-full'>
                <img src='images/hotelFront.jpg' className='max-md:w-[80%] w-[40%]'></img>
                <div className='flex flex-col items-start gap-4 w-[40%] max-md:w-[80%]'>
                    <p className='text-secondary'>{HOTEL_NAME}</p>
                    <div className='flex flex-row gap-5 items-center'>
                        <FaLocationDot className='text-secondary' />
                        <p>{HOTEL_ADDRESS}</p>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <IoIosMail className='text-secondary' />
                        <p>{HOTEL_MAIL1}</p>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <FaPhoneAlt className='text-secondary' />
                        <p>{HOTEL_PHONE1} | {HOTEL_PHONE2}</p>
                    </div>

                </div>

            </div>
            <div className='flex flex-row gap-5 w-[50%] max-md:w-[80%]'>
                <form className='flex flex-col gap-2 w-full'>
                    <input
                        type="text"
                        className='p-2 bg-[transparent] rounded-lg placeholder:text-gray-400 text-black  border border-black'
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        className='p-2 bg-[transparent] rounded-lg placeholder:text-gray-400 text-black  border border-black'
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows={6}
                        className='p-2 bg-[transparent] rounded-lg placeholder:text-gray-400 text-black  border border-black'
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className='border border-black hover:bg-white hover:delay-100 hover:text-black rounded-lg p-2 text-black font-bold'>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
