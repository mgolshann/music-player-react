import React, { useState } from 'react'
import SongListItem from './SongListItem'

function SongList({ songs, setCurrentSong, setSongs, toggleList }) {

    return (
        <div className={`song-list ${!toggleList && "displayNone"}`}>
            <h1>List of Songs</h1>
            {
                songs.map(song => (
                    <SongListItem key={song.id} setSongs={setSongs} song={song} setCurrentSong={setCurrentSong} songs={songs} />
                ))
            }
        </div>
    )
}

export default SongList
