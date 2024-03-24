import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './components/Spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player/Player';

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState()
  const [songs, setSongs] = useState()
  const [appStarted, setAppStarted] = useState(false)

  // console.log('songs', songs)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if(_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
    }
  }, [])

  // GETting liked songs
  if (token && !appStarted) {
    setAppStarted(true)
    fetch(`https://api.spotify.com/v1/me/tracks`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setSongs(data.items)
      console.log('songs', songs)
    })
    .catch(err => console.log('error', err))
  }

  return (
    <div className="App">
      {songs ? <Player songs={songs} token={token}/> : ( token ? <h1 className='login'>Loading...</h1> : <Login />)}
    </div>
  );
}

export default App;
