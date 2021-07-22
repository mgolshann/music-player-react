import React, { useState } from 'react'
import Player from './components/Player'
import Song from './components/Song'
import SongList from './components/SongList'
import ToggleList from './components/ToggleList'
import data from './data'
import './styles/app.scss'

function App() {
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setisPlaying] = useState(false)
    const [toggleList, setToggleList] = useState(false)

    return (
        <div className={`app ${toggleList && 'activeList'}`}>
            <h1>Music Player</h1>
            <div className="song-player">
                <ToggleList
                    setToggleList={setToggleList}
                    toggleList={toggleList} />
                <Song currentSong={currentSong} />
                <Player
                    setSongs={setSongs}
                    songs={songs}
                    setCurrentSong={setCurrentSong}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    setisPlaying={setisPlaying} />
                <SongList
                    toggleList={toggleList}
                    setCurrentSong={setCurrentSong}
                    songs={songs}
                    setSongs={setSongs} />
            </div>
        </div>
    )
}

export default App
