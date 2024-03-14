import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel'

export default function CustomCarousel({ child }) {
    return (
        <Carousel
            axis='horizontal'
            showArrows={true}
            autoPlay
            autoFocus
            useKeyboardArrows={true}
            renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                    <div
                        className={`${hasPrev ? "absolute" : "hidden"
                            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                    >
                        <FaArrowLeft className="w-9 h-9 max-md:w-4 max-md:h-4 text-white" />
                    </div>
                );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
                return (
                    <div
                        className={`${hasNext ? "absolute" : "hidden"
                            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                    >
                        <FaArrowRight className="w-9 h-9 max-md:w-4 max-md:h-4 text-white" />
                    </div>
                );
            }}
            showThumbs={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                return (
                    <div
                        className={`ml-4 cursor-pointer inline-block rounded-[50%] h-4 w-4 max-md:h-3 max-md:w-3 shadow-lg ${isSelected ? 'bg-gray-500' : 'bg-white'}`}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                    >
                    </div>
                );
            }}
        >
            <div>
                <img src='images/Hotel1.jpg' className='w-full' />
            </div>
            <div>
                <img src='images/Hotel1.jpg' className='w-full' />
            </div>
        </Carousel>
    )
}
