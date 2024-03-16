import React from 'react';
import { HOTEL_ADDRESS, HOTEL_MAIL1, HOTEL_NAME, HOTEL_PHONE1, HOTEL_PHONE2 } from '../constants';




const ContactPage = () => {
    return (
        <div className="flex flex-col gap-6 py-10 justify-center items-center font-Lora max-md:flex-col w-full bg-pagebg">
            <div className='flex flex-row max-md:flex-col justify-center items-center gap-10 w-full'>
                <div className='flex flex-col gap-10 w-[40%] max-md:w-[90%]'>
                    <div className='flex flex-col items-start gap-4 w-full'>
                        <p className='text-secondary text-2xl'>{HOTEL_NAME}</p>
                        <div className='flex flex-row gap-5 items-center'>
                            <img src='/icons/location.svg' className='w-6' />
                            <p className='text-left'>{HOTEL_ADDRESS}</p>
                        </div>
                        <div className='flex flex-row gap-5 items-center'>
                            <img src='/icons/location.svg' className='w-6' />
                            <p className='text-left'>{HOTEL_MAIL1}</p>
                        </div>
                        <div className='flex flex-row gap-5 items-center'>
                            <img src='/icons/location.svg' className='w-6' />
                            <p className='text-left'>{HOTEL_PHONE1} | {HOTEL_PHONE2}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 w-full'>
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
                            <button type="submit" className='border border-black bg-secondary hover:opacity-50 hover:delay-100 rounded-lg p-2 text-primary font-bold'>Send Message</button>
                        </form>
                    </div>
                </div>
                <img src='/images/hotel-images/reception2.jpg' className='max-md:w-[80%] w-[40%] rounded-lg'></img>
            </div>
            <div className='w-[90%] h-[500px] max-sm:h-[300px] rounded-xl'>
                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Taj%20Palace,%20New%20Delhi+(My%20BusineHioss%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>

        </div>
    );
};

export default ContactPage;
