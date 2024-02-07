"use client"

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleCloseButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "100%",
        height: "auto"
    }


    return (
        <Youtube videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo}
            opts={option} />
    )
}

export default VideoPlayer