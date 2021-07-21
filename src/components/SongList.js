import React from 'react'
import SongListItem from './SongListItem'

function SongList({ songs }) {
    return (
        <div className="song-list">
            <h1>List of Songs</h1>
            {
                songs.map(song => (
                    <SongListItem song={song} />
                ))
            }
        </div>
    )
}

export default SongList
