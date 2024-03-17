import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getActiveImages } from '../helpers/galleryHelper';

export default function CustomCarousel({ children, onChangeHandler }) {
    return (
        <Carousel
            onChange={onChangeHandler}
            interval={3000}
            transitionTime={500}
            preventMovementUntilSwipeScrollTolerance={true}
            axis='horizontal'
            infiniteLoop={true}
            showArrows={true}
            swipeAnimationHandler={"fade"}
            autoPlay
            useKeyboardArrows={true}
            renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                    <div
                        className={`${hasPrev ? "absolute" : "hidden"
                            } top-0 bottom-0 left-0 flex justify-center items-center p-3  hover:opacity-100 cursor-pointer z-20`}
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
                            } top-0 bottom-0 right-0 flex justify-center items-center p-3  hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                    >
                        <FaArrowRight className="w-20 h-9 max-md:w-4 max-md:h-4 text-white" />
                    </div>
                );
            }}
            showThumbs={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                return (
                    <li
                        className={`ml-4 cursor-pointer inline-block rounded-[50%] h-3 w-3 max-md:h-3 max-md:w-3 shadow-lg ${isSelected ? 'bg-gray-500' : 'bg-white'}`}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                    >
                    </li>
                );
            }}
        >
            {
                children
            }
        </Carousel>
    )
}
