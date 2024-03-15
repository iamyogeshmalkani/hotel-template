import React from 'react'

export default function CustomModal({ children, closeModal }) {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" onClick={closeModal} >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="z-20 bg-white p-6 rounded-lg shadow-xl">{children}</div>
            </div>
        </div>
    )
}
