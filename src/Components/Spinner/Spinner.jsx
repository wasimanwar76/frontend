import React from 'react'

const Spinner = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-[79vh] w-full">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
        </div>
    )
}

export default Spinner
