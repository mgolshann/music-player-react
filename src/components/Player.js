import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

function Player({ currentSong, isPlaying, setisPlaying }) {
    const audioRef = useRef(null)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })

    const playSong = () => {
        if (!isPlaying) {
            audioRef.current.play();
            setisPlaying(!isPlaying)
        } else {
            audioRef.current.pause();
            setisPlaying(!isPlaying)
        }
    }

    const timeFormat = (time) => {
        return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    }
    const handleTimeUpdate = (e) => {
        const currentTime = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({ ...songInfo, currentTime, duration })
    }
    const dragHandle = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }
    return (
        <div className="play-container">
            <div className="time-control">
                <p>{timeFormat(songInfo.currentTime)}</p>
                <input onChange={dragHandle} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon onClick={playSong} className="skip-play" icon={!isPlaying ? faPlay : faPauseCircle} size="2x" />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" />
            </div>
            <audio onLoadedMetadataCapture={handleTimeUpdate} onTimeUpdate={handleTimeUpdate} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player
