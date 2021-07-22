import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

function Player({ currentSong, setCurrentSong, isPlaying, setisPlaying, songs, setSongs }) {

    const audioRef = useRef(null)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animateTrace: 0
    })
    
    useEffect(() => {
        const newSongs = songs.map(item => {
            if (item.id === currentSong.id) {
                return {
                    ...item,
                    active: true
                }
            } else {
                return {
                    ...item,
                    active: false
                }
            }
        })
        setSongs(newSongs)
    }, [currentSong])

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

        if (currentTime === duration) {
            skipSong("next")
            setisPlaying(!isPlaying)
        }
        // Calculate animateTrace
        const roundDuration = Math.round(duration)
        const roundCurrentTime = Math.round(currentTime)
        const animateTrace = Math.round((roundCurrentTime / roundDuration) * 100)
        setSongInfo({ ...songInfo, currentTime, duration, animateTrace })
    }

    const dragHandle = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }

    const skipSong = (state) => {
        let currentIndex = songs.findIndex(item => item.id === currentSong.id)
        if (state === "next") {
            if ((songs.length - 1) === currentIndex) {
                setCurrentSong(songs[0])
            } else {
                setCurrentSong(songs[currentIndex + 1])
            }
        }

        if (state === "back") {
            if (currentIndex <= 0) {
                setCurrentSong(songs[songs.length - 1])
            } else {
                setCurrentSong(songs[currentIndex - 1])
            }
        }

        setisPlaying(!isPlaying)
    }

    let animateTrack = {
        transform: `translateX(${songInfo.animateTrace}%)`
    }


    return (
        <div className="play-container">
            <div className="time-control">
                <p>{timeFormat(songInfo.currentTime)}</p>
                <div 
                    style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} 
                    className="track">
                    <input onChange={dragHandle} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
                    <div style={animateTrack} className="animate-track"></div>
                </div>
                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipSong('back')} className="skip-back" icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon onClick={playSong} className="skip-play" icon={!isPlaying ? faPlay : faPauseCircle} size="2x" />
                <FontAwesomeIcon onClick={() => skipSong('next')} className="skip-forward" icon={faAngleRight} size="2x" />
            </div>
            <audio onLoadedMetadataCapture={handleTimeUpdate} onTimeUpdate={handleTimeUpdate} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player
