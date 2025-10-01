import React from 'react'
import Videos from "../../../public/Videoos.mp4"

const Video = () => {
    return (
        <div className='h-full w-full'>
            <video className='h-full w-full object-cover' autoPlay loop muted src={Videos}></video>
        </div>
    )
}

export default Video