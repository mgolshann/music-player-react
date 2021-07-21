import React from 'react'

function SongListItem({ song }) {
    return (
        <div className="song-item">
            <img src={song.cover} />
            <div className="song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    )
}

export default SongListItem
