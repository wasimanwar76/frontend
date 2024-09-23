import React from 'react'

const MissionVision = () => {
    return (
        <>
            <div className='lg:px-10 md:px-5'>
                <div className="sm:flex items-center max-w-screen-xl">
                    <div className="sm:w-1/2 p-10">
                        <div className="image object-center text-center">
                            <img src="https://i.imgur.com/WbQnbas.png" />
                        </div>
                    </div>
                    <div className="sm:w-1/2 p-5">
                        <div className="text">
                            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Library</span>
                            </h2>
                            <p className="text-gray-700">
                                Welcome to <strong className='text-xl text-orange-500'>Sagar Library</strong>, your dedicated space for exploration, learning, and community connection. Our library is more than just a repository of books—it's a vibrant hub for knowledge and innovation, designed to serve and inspire our diverse community.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='border-2 w-[500px] '>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionVision
