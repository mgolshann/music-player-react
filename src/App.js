import React, { useState } from 'react'
import Player from './components/Player'
import Song from './components/Song'
import SongList from './components/SongList'
import data from './data'
import './styles/app.scss'

function App() {
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setisPlaying] = useState(false)

    return (
        <div className="App">
            <h1>Music Player</h1>
            <div className="song-player">
                <Song currentSong={currentSong} />
                <Player currentSong={currentSong} isPlaying={isPlaying} setisPlaying={setisPlaying} />
                <SongList songs={songs} />
            </div>
        </div>
    )
}

export default App
