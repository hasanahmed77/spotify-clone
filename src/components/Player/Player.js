import React, { useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import './player.css'

const Player = ({ songs, token }) => {
  const [isPlaying, setIsPlaying] = useState(false)
    const listOfSongs = []
    const images = []

    songs.forEach(song => {
        listOfSongs.push(song.track.uri)
        images.push(song.track.album.images[0].url)
    })

    function handlePlay (state) {
      setIsPlaying(!state.isPlaying)
    }

    console.log(listOfSongs)
    console.log(images)

  return (
    <div className='player-container'>
        <div className="image">
          {isPlaying ? <p className='player-status'>Hit the play button to play MUSIC</p> : <p className='player-status'>Playing...</p>}
        </div>
        <div className="player">
        <SpotifyPlayer
              token={token}
              showSaveIcon
              callback={handlePlay}
              uris={listOfSongs}
          />
      </div>
    </div>
  )
}

export default Player