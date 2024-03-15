import React from 'react'

export default function FloatingButton({ children, clickHandler }) {
    return (
        <div className='fixed right-5 bottom-10 cursor-pointer' onClick={clickHandler}>
            {children}
        </div>
    )
}
