import React from 'react'

export default function ClickableCategoriesSection({ categories, clickHandler, activeCategory }) {
    return (
        <div className='w-full flex flex-row flex-wrap gap-5 justify-center bg-secondary py-10 px-5'>
            {
                categories.map((category) => {
                    return (<p className={`text-primary cursor-pointer text-xl max-md:text-sm ${activeCategory === category ? 'underline' : ''}`} onClick={() => clickHandler(category)}>{category}</p>)
                })
            }
        </div>
    )
}
