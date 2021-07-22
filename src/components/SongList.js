import React, { useState } from 'react'
import SongListItem from './SongListItem'

function SongList({ songs, setCurrentSong, setSongs, toggleList }) {

    return (
        <div className={`song-list ${!toggleList && "displayNone"}`}>
            <h1>List of Songs</h1>
            {
                songs.map(song => (
                    <SongListItem key={song.id}
                        song={song}
                        setSongs={setSongs}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                    />
                ))
            }
        </div>
    )
}

export default SongList
