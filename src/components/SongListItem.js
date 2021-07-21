import React from 'react'

function SongListItem({ song, setCurrentSong, songs, setSongs }) {
    const currentSong = () => {
        // first approach setCurrentSong(song)
        // second approach
        const selectedSong = songs.filter(item => item.id === song.id)
        setCurrentSong(selectedSong[0])

        const newSongs = songs.map(item => {
            if (item.id === song.id) {
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
    }

    return (
        <div className={`song-item ${song.active && "selected"}`} onClick={currentSong}>
            <img src={song.cover} />
            <div className="song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    )
}

export default SongListItem
